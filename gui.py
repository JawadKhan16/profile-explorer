import tkinter as tk
from tkinter import messagebox
from game import Game

class TicTacToeGUI:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Tic Tac Toe")
        self.game = Game()
        self.buttons = []
        self.create_board()
        
    def create_board(self):
        for i in range(3):
            row = []
            for j in range(3):
                button = tk.Button(
                    self.window,
                    text="",
                    font=('Arial', 20),
                    width=5,
                    height=2,
                    command=lambda row=i, col=j: self.make_move(row, col)
                )
                button.grid(row=i, column=j)
                row.append(button)
            self.buttons.append(row)
            
    def make_move(self, row, col):
        position = row * 3 + col
        result = self.game.play_turn(position)
        
        if result != "Invalid move, try again!":
            self.buttons[row][col]['text'] = self.game.board.board[position]
            
            if result:
                messagebox.showinfo("Game Over", result)
                self.window.quit()
                
    def run(self):
        self.window.mainloop()