from board import Board

class Game:
    def __init__(self):
        self.board = Board()
        self.current_player = "X"
        
    def switch_player(self):
        self.current_player = "O" if self.current_player == "X" else "X"
        
    def play_turn(self, position):
        if self.board.make_move(position, self.current_player):
            if self.board.is_winner(self.current_player):
                return f"Player {self.current_player} wins!"
            elif self.board.is_full():
                return "It's a tie!"
            self.switch_player()
            return None
        return "Invalid move, try again!"