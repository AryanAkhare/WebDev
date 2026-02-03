import tkinter as tk
import random
import os

# ---------------- CONFIG ----------------
WIDTH = 450
HEIGHT = 700
GRAVITY = 0.6  # Reduced for smoother falling
JUMP = -9      # Snappier jump
PIPE_WIDTH = 80
PIPE_GAP = 200
PIPE_SPEED = 4
GROUND_HEIGHT = 50

class FlappySatire:
    def __init__(self, root):
        self.root = root
        self.root.title("Flappy Masterstroke Edition")
        self.canvas = tk.Canvas(root, width=WIDTH, height=HEIGHT, bg="#FF9933") # Saffron-ish bg
        self.canvas.pack()

        # Load Images
        self.images = {}
        self.load_assets()
        
        self.start_screen()

    def load_assets(self):
        from PIL import Image, ImageTk
        try:
            # Bird - Modiji
            if os.path.exists("modi.png"):
                img = Image.open("modi.png").convert("RGBA").resize((60, 50))
                self.images['bird'] = ImageTk.PhotoImage(img)
            
            # Obstacle - Opposition/Issues
            if os.path.exists("opposition.png"):
                img = Image.open("opposition.png").convert("RGBA").resize((PIPE_WIDTH, 100))
                self.images['pipe'] = ImageTk.PhotoImage(img)
                
            # Background
            if os.path.exists("bg.png"):
                img = Image.open("bg.png").resize((WIDTH, HEIGHT))
                self.images['bg'] = ImageTk.PhotoImage(img)
        except Exception as e:
            print(f"Asset Error: {e}")

    def start_screen(self):
        self.canvas.delete("all")
        if 'bg' in self.images:
            self.canvas.create_image(WIDTH//2, HEIGHT//2, image=self.images['bg'])
        
        self.canvas.create_text(WIDTH//2, 150, text="MODI RUN", font=("Impact", 40), fill="white")
        self.canvas.create_text(WIDTH//2, 200, text="Avoid the 'Anti-Nationals'", font=("Arial", 14, "italic"), fill="white")
        
        btn = tk.Button(self.root, text="BEGIN MASTERSTROKE", font=("Arial", 12, "bold"), 
                        command=self.start_game, bg="#138808", fg="white")
        self.canvas.create_window(WIDTH//2, HEIGHT//2, window=btn)

    def start_game(self):
        self.canvas.delete("all")
        self.running = True
        self.score = 0
        self.velocity = 0
        self.pipes = []
        
        # Draw Background
        if 'bg' in self.images:
            self.canvas.create_image(WIDTH//2, HEIGHT//2, image=self.images['bg'])

        # Player
        if 'bird' in self.images:
            self.bird = self.canvas.create_image(100, HEIGHT//2, image=self.images['bird'])
        else:
            self.bird = self.canvas.create_oval(80, 340, 120, 360, fill="orange")

        self.score_label = self.canvas.create_text(WIDTH//2, 50, text="Masterstrokes: 0", 
                                                font=("Arial", 20, "bold"), fill="white")
        
        self.spawn_pipe()
        self.root.bind("<space>", self.jump)
        self.root.bind("<Button-1>", self.jump) # Mouse click support
        self.game_loop()

    def jump(self, event=None):
        if self.running:
            self.velocity = JUMP

    def spawn_pipe(self):
        gap_y = random.randint(150, HEIGHT - GROUND_HEIGHT - 250)
        # Top Pipe
        p1 = self.canvas.create_rectangle(WIDTH, 0, WIDTH + PIPE_WIDTH, gap_y, fill="#000080", outline="")
        # Bottom Pipe
        p2 = self.canvas.create_rectangle(WIDTH, gap_y + PIPE_GAP, WIDTH + PIPE_WIDTH, HEIGHT, fill="#000080", outline="")
        
        self.pipes.append({'ids': [p1, p2], 'passed': False})

    def game_loop(self):
        if not self.running: return

        # Physics
        self.velocity += GRAVITY
        self.canvas.move(self.bird, 0, self.velocity)
        
        # Pipe Movement
        for pipe in self.pipes[:]:
            for p_id in pipe['ids']:
                self.canvas.move(p_id, -PIPE_SPEED, 0)
            
            # Scoring
            coords = self.canvas.coords(pipe['ids'][0])
            if coords[2] < 100 and not pipe['passed']:
                pipe['passed'] = True
                self.score += 1
                self.canvas.itemconfig(self.score_label, text=f"Masterstrokes: {self.score}")

            # Remove off-screen pipes
            if coords[2] < 0:
                self.pipes.remove(pipe)
                self.spawn_pipe()

        # Collision & Bounds
        if self.check_collision():
            self.game_over()
            return

        self.root.after(20, self.game_loop)

    def check_collision(self):
        b_coords = self.canvas.bbox(self.bird)
        if b_coords[1] < 0 or b_coords[3] > HEIGHT:
            return True
        
        for pipe in self.pipes:
            for p_id in pipe['ids']:
                if self.canvas.find_overlapping(*b_coords):
                    # Filter out the bird itself and background
                    overlap = self.canvas.find_overlapping(*b_coords)
                    if any(x in pipe['ids'] for x in overlap):
                        return True
        return False

    def game_over(self):
        self.running = False
        msgs = ["It's a conspiracy!", "Media was biased!", "EVM was hacked!", "Nehru's fault!"]
        msg = random.choice(msgs)
        
        self.canvas.create_rectangle(50, 200, WIDTH-50, 450, fill="black", stipple="gray50")
        self.canvas.create_text(WIDTH//2, 280, text="GAME OVER", font=("Impact", 35), fill="red")
        self.canvas.create_text(WIDTH//2, 330, text=msg, font=("Arial", 16, "bold"), fill="yellow")
        
        btn = tk.Button(self.root, text="TRY ANOTHER TERM", command=self.start_game)
        self.canvas.create_window(WIDTH//2, 400, window=btn)

if __name__ == "__main__":
    root = tk.Tk()
    game = FlappySatire(root)
    root.mainloop()