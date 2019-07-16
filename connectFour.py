# Link: https://www.codewars.com/kata/connect-four-1/python

# My Code
col_dict = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,'G':6,}
color_dict = {'Yellow':'y', 'Red':'r'}
inv_color_dict = {'y':'Yellow', 'r':'Red'}
 
def play(position, board):
    print(position)
    column, color = position.split('_')
    col_index = col_dict[column]
    color_value = color_dict[color]
    column_list = board[col_index]
    change_index = -1
    for square in column_list:
        if square != 'w':
            column_list[change_index] = color_value
            break
        change_index += 1
    if change_index == 5:
        column_list[5] = color_value
    return col_index, change_index, color_value
 
def check_for_winner(board, col, row, color):
    hor_list = [color]
    ver_list = [color]
    dia_list1 = [color]
    dia_list2 = [color]
    for i in range(3):
        j = i + 1
        #horizontal list
        col_plus_one = col + j
        if col_plus_one < 7:
            hor_list.append(board[col_plus_one][row])
        col_minus_one = col - j
        if  col_minus_one > -1:
            hor_list.insert(0, board[col_minus_one][row])
        print(f'Hor: {hor_list}')
        if ''.join(hor_list).find(color * 4) != -1:
            return inv_color_dict[color]
        #vertical list
        row_plus_one = row + j
        if row_plus_one < 6:
            ver_list.append(board[col][row_plus_one])
        row_minus_one = row - j
        if  row_minus_one > -1:
            ver_list.insert(0, board[col][row_minus_one])
        print(f'ver: {ver_list}')
        if ''.join(ver_list).find(color * 4) != -1:
            return inv_color_dict[color]
        #diago list:
        if col_plus_one < 7 and row_plus_one < 6:
            dia_list1.append(board[col_plus_one][row_plus_one])
        if col_minus_one > -1 and row_minus_one > -1:
            dia_list1.insert(0, board[col_minus_one][row_minus_one])
        print(f'dia1: {dia_list1}')
        if ''.join(dia_list1).find(color * 4) != -1:
            return inv_color_dict[color]
        #diago2 list:
        if col_minus_one > -1 and row_plus_one < 6:
            dia_list2.append(board[col_minus_one][row_plus_one])
        if col_plus_one < 7 and row_minus_one > -1:
            dia_list2.insert(0, board[col_plus_one][row_minus_one])
        print(f'dia2: {dia_list2}')
        if ''.join(dia_list2).find(color * 4) != -1:
            return inv_color_dict[color]
       
    return 'Draw'
 
def who_is_winner(pieces_position_list):    
    board = [
        ['w','w','w','w','w','w',], # A
        ['w','w','w','w','w','w',], # B
        ['w','w','w','w','w','w',], # C
        ['w','w','w','w','w','w',], # D
        ['w','w','w','w','w','w',], # E
        ['w','w','w','w','w','w',], # F
        ['w','w','w','w','w','w',], # G
    ]
    for move in pieces_position_list:
        col, row, color = play(move, board)
        print(col, row, color)
        winner = check_for_winner(board, col, row, color)
        print(winner)
        if winner != 'Draw':
            return winner
    return 'Draw'

# Top Solution
COLUMNS, ROWS = 'ABCDEFG', range(6)
LINES = [{(COLUMNS[i+k], ROWS[j]) for k in range(4)}
           for i in range(len(COLUMNS) - 3) for j in range(len(ROWS))] \
        + [{(COLUMNS[i], ROWS[j+k]) for k in range(4)}
           for i in range(len(COLUMNS)) for j in range(len(ROWS) - 3)] \
        + [{(COLUMNS[i+k], ROWS[j+k]) for k in range(4)}
           for i in range(len(COLUMNS) - 3) for j in range(len(ROWS) - 3)] \
        + [{(COLUMNS[i+k], ROWS[j-k]) for k in range(4)}
           for i in range(len(COLUMNS) - 3) for j in range(3, len(ROWS))]

def who_is_winner(pieces_positions):
    players = {}
    board = dict.fromkeys(COLUMNS, 0)
    for position in pieces_positions:
        column, player = position.split('_')
        pos = (column, board[column])
        board[column] += 1
        players.setdefault(player, set()).add(pos)
        if any(line <= players[player] for line in LINES):
            return player
    return "Draw"