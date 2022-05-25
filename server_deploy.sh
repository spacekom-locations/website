#!/bin/sh

set -e

echo "Deploying SpaceKom Website ..."

# Enter maintenance mode

    # Update codebase

    git fetch origin deploy

    git reset --hard origin/deploy
    
    chmod -R 777 .


# Exit maintenance 

echo "SpaceKom Website deployed!"