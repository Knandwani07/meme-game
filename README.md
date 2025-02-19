# Continuous Deployment using AWS CodePipeline and S3

## Overview
This project sets up a **Continuous Deployment (CD)** pipeline using **AWS CodePipeline** and **Amazon S3** to automatically deploy a web application whenever changes are pushed to a GitHub repository.

## Project Description
We host a static web application (a simple game) on **Amazon S3**, enabling **static website hosting**. The deployment is automated using **AWS CodePipeline**, which detects changes in the GitHub repository and updates the S3 bucket accordingly.

## The Game
This project features a **memory matching game** where the player flips two cards at a time to find matching images. If the cards match, they stay flipped; otherwise, they return to their original state. The game is built using **HTML, CSS, and JavaScript**.

### Possible Enhancements
- Implement a **scoring mechanism**
- Add a **timer** to challenge players
- Increase the number of cards for more complexity
- Introduce **multiplayer functionality** to compare scores

## Deployment Process
1. **GitHub Repository** - Stores the source code.
2. **S3 Bucket** - Hosts the static website.
3. **AWS CodePipeline** - Automates deployment from GitHub to S3 whenever updates occur.

## AWS Services Used
- **Amazon S3** (for static website hosting)
- **AWS CodePipeline** (for automated deployment)
- **AWS CodeBuild** (optional, for additional build steps)
- **IAM Roles & Policies** (for security and access control)

## Cost Considerations
All services used are part of the **AWS Free Tier**, but charges may apply depending on usage. It's recommended to delete or disable unused resources to avoid unexpected costs.
