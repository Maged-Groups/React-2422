# Initialize a new repo
git init

# rename a branch
git branch -m old_name new_name

# add all files to tracking list
git add .

# configure author profile
git config --global user.email "your@email"
git config --global user.name "your Name"

# Save current updates (commit)
git commit -m "Your Message or lable"

# remove a file from tracking
git rm --cached file_path