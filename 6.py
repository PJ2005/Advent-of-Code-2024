inp = '''....#.....
....^....#
..........
..#.......
.......#..
..........
.#........
........#.
#.........
......#...'''

# Convert the input into a list of lists for easier manipulation
l = [list(line) for line in inp.split('\n')]

# Find the initial position and set the direction
for i in range(len(l)):
    if '^' in l[i]:
        pos = l[i].index('^')
        l_pos = i
        dir = 0  # 0: up, 1: right, 2: down, 3: left
        break

# Replace the starting position with 'X'
l[l_pos][pos] = 'X'

visited = set()
visited.add((l_pos, pos))

# Movement vectors for each direction
directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]  # up, right, down, left

while True:
    # Calculate the position directly in front of the guard
    next_l_pos = l_pos + directions[dir][0]
    next_pos = pos + directions[dir][1]

    # Assume there's no obstacle in front
    obstacle_in_front = False

    # Check if the next position is within bounds
    if 0 <= next_l_pos < len(l) and 0 <= next_pos < len(l[0]):
        # Check if there is an obstacle in front
        if l[next_l_pos][next_pos] == '#':
            obstacle_in_front = True

    if obstacle_in_front:
        # Turn right 90 degrees
        dir = (dir + 1) % 4
    else:
        # Move forward
        l_pos = next_l_pos
        pos = next_pos
        # Check if we have moved out of the map
        if 0 <= l_pos < len(l) and 0 <= pos < len(l[0]):
            if l[l_pos][pos] != 'X':
                l[l_pos][pos] = 'X'  # Mark the new position
            visited.add((l_pos, pos))
        else:
            # The guard has left the mapped area
            break

# Calculate the number of positions visited
count = len(visited)
print(count)

# Print the map with the guard's path
for row in l:
    print(''.join(row))