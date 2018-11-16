# Documentation

## 1. Who is your client?

---

## 2. What is your client’s need (i.e. challenge) that you will be addressing in your project?

---

## 3. Describe the client’s current setup and data:

---

## 4. Describe the project you will be conducting and how your App will address the client’s needs:

---

## 5. Identify and describe the software (including databases) to be used in your App:

---

## 6. Identify and describe the network setup you will use in your development:

---

## 7. Identify and describe the infrastructure (i.e. hardware) that your App will run on:

---

## 8. Describe the architecture of your App:

---

## 9. Explain the different high-level components (abstractions) in your App:

---

## 10. Detail any third party services that your App will use:

---

## 11. Identify the database to be used in your app and provide a justification for your choice:

---

## 12. Discuss the database relations to be implemented:

---

## 13. Provide your database schema design:

---

## 14. Provide User stories for your App:

---

## 15. Provide Wireframes for your App:

---

## 16. Describe the way Tasks are being allocated and tracked in your project:

---

## 17. Discuss how Agile methodology is being implemented in your App:

---

## 18.Provide an overview and description of your Source control process:

![alt text](https://github.com/LongNguyen206/project_mernmade/doc_images/git_workflow_chart.jpg)

### Initial work cycle:
1. We started with the **Git Admin** creating a `Central Remote Repo`:
    ```
    git init
    git add .
    git commit -m "Create Central Repo"
    git remote add origin <git_url>
    git push origin master
    ```
2. The **Git Admin** then creates a `Remote Dev Branch`, where each team member's code will be merged together and tested:
    ```
    (done in Github web app)
    ```
3. Each team member then clones the `Central Repo`:  
    ```
    git clone <git_url>
    ```
4. Each team member then creates their `Local Dev Branch` and names it under their name:
    ```
    git checkout -b <team_member_dev>
    ```
5. Team members do the coding in the newly created `Local Dev Branch`
6. Work is added to the **staging phase**:
    ```
    git add .
    ```
7. Team members **commit** staged changes:
    ```
    git commit -m "<Commit message>"
    ```
8. When a significant amount of commits is accumulated, or when the individual work is requested for the `Central Repo`, the team member starts the process of **pushing their commits**. First step is to move from `Local Dev Branch` to `Local Master Branch`:
    ```
    git checkout master
    ```
9. The team member then **pulls** the `Remote Dev Branch` work into their `Local Master Branch` to have an up-to-date work of others:
    ```
    git pull origin dev
    ```
10. Their individual work is then merged from `Local Dev Branch` to `Local Master Branch`, so that they have their work added on top of the other team members' work:
    ```
    git merge <team_member_dev>
    ```
11. Now, as the `Local Master Branch` has the most up-to-date combined code, team members will **push** this code to the `Remote Repo`, on the branch with their name. The following command will push to `Remote Repo` and **create a new branch** if needed:
    ```
    git push origin master:<team_member_dev>
    ```
12. Team members then proceed to create a **Pull Request** on the Github web app (in browser). The request intends to merge their `Personal Remote Branch` into `Remote Dev Branch`:
    ```
    (done in Github web app)
    ```
13. Team member assigns **Reviewers** for their Pull Request:
    ``` 
    (done in Github web app)
    ```
14. Reviewers proceed to review the code. If the code is approved, the **Github Admin** will **approve the merge** into `Remote Dev Branch` and **delete the `individual Remote branch`**. If the code needs changes, the team member goes back to step 5.
15. Once the `Remote Dev Branch` has a stable version of code, the **Github Admin** will **merge `Remote Dev Branch` into `Remote Master Branch`** (i.e. **origin master**). **Github Admin** will do this in their `Local Dev Branch`:
    ```
    git pull origin dev
    git push origin master
    ```
### Start of the new work cycle:
1. After the successful **Pull Request**, the team member will start a new coding cycle. For this, first they need to make sure they are in the `Local Master Branch`:
    ```
    git checkout master
    ```
2. Before starting to code, the team member will **ensure they have the most up-to-date version** of the code to work upon:
    ```
    git pull origin dev
    ```
3. They will proceed with **deleting** the current `Local Dev Branch`:
    ```
    git branch -d <team_member_dev>
    ```
4. ...And **create it again** to have a fresh copy of `Local Master Branch`:
    ```
    git checkout -b <team_member_dev>
    ```
5. The team member commences coding. At this point, this step is equivalent to step 5 in "Initial work cycle".

---

## 19. Provide an overview and description of your Testing process:

---

## 20. Discuss and analyse requirements related to information system security:

---

## 21. Discuss methods you will use to protect information and data:

---

## 22. Research what your legal obligations are in relation to handling user data:

---