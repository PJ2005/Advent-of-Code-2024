def diff(inp: tuple[list[int]]) -> int:
    '''
    Function to return total distance between numbers.\n
    Args:
        inp (tuple[list[int]]): Tuple of list of integers\n
    Returns:
        int: Total distance
    '''

    distance = 0

    # sorting both the sides
    inp1 = sorted(inp[0])
    inp2 = sorted(inp[1])

    # calculate distance between the shortest elements
    i = 0
    while (i != len(inp1)):
        distance += abs(inp1[i] - inp2[i])
        i += 1

    return distance

def read_from_file(file_path: str)-> tuple[list[int]]:
    '''
    Function to read from the file and reutrn the input as an array of tuples.\n
    Args:
        file_path (str): File Path where input is stored\n
    Returns:
        Tuple of lists of integers\n
    '''

    f = open(file_path)
    inp1, inp2 = [], []

    for i in f:
        line = i.strip().split('   ')
        inp1.append(int(line[0]))
        inp2.append(int(line[1]))
    f.close()
    
    return inp1, inp2

def part1() -> int:
    '''
    Function which runs all the operations related to part 1 of the problem.\n
    Returns:
        int
    '''
    problem_input = read_from_file('day1/input.txt')

    total = diff(problem_input)
    
    return total

def similarity_score(inp: tuple[list[int]]) -> int:
    '''
    Function to find similarity score\n
    Args:
        inp (tuple[list[int]]): Tuple of list of integers\n
    Returns:
        int: Similarity Score
    '''

    similar_score = 0

    # making it a set so that we don't check the numbers repeatedly
    inp1 = set(inp[0])
    inp2 = inp[1]

    for i in inp1:
        similar_score += i * inp2.count(i)

    return similar_score

def part2() -> int:
    '''
    Function which runs all the operations related to part 1 of the problem.\n
    Returns:
        int
    '''
    problem_input = read_from_file('day1/input.txt')

    score = similarity_score(problem_input)
    
    return score

f = open('day1/output.txt', 'w')

distance = part1()
out1 = 'Part 1 answer is: ' + str(distance)
f.write(out1)

f.write('\n')

score = part2()
out2 = 'Part 2 answer is: ' + str(score)
f.write(out2)

f.close()