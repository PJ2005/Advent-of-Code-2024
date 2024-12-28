'''
Purpose
    The script creates a standardized folder structure for 25 days (1-25) with necessary files for each day.

Key Components:
    Base Directory:
        Set to './2024' which will be the root folder

    Folder Structure:
        Creates 25 folders named day 1 through day 25

    Files Created:
    For each day, it creates two empty files:
        input.txt: For challenge input data
        output.txt: For challenge results
        solution.py: For writing the solution code
'''

import os

# Base directory where the folders will be created
base_dir = './2024'  # Replace with your actual base directory

# Create folders and files
for day in range(1, 26):
    day_folder = os.path.join(base_dir, f'day{day}')
    os.makedirs(day_folder, exist_ok=True)
    
    # Create input.txt, output.txt, and solution.py in each folder
    open(os.path.join(day_folder, 'input.txt'), 'w').close()
    open(os.path.join(day_folder, 'output.txt'), 'w').close()
    open(os.path.join(day_folder, 'solution.py'), 'w').close()

print("Folders and files created successfully.")