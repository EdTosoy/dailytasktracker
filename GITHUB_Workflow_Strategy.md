# Git and GitHub Workflow Strategy

This document outlines the rules and strategies for using Git and GitHub in the development of the HRIS system.

---

## **1. Repository Structure**
- Use a single repository for the HRIS system, unless the project expands into multiple sub-systems (e.g., API, admin, mobile app).
- Organize your repository with the following structure:
  ```
  hris-system/
  ├── src/                # Application source code
  ├── tests/              # Automated tests
  ├── docs/               # Documentation
  ├── .github/            # GitHub-specific workflows (e.g., CI/CD pipelines)
  ├── .env.example        # Sample environment variables
  ├── README.md           # Project overview
  ├── package.json        # Project metadata and dependencies
  └── tsconfig.json       # TypeScript configuration
  ```

---

## **2. Branching Strategy**
Follow the **Git Flow** branching model to maintain a clean development workflow:
### **Branches**
1. **`main` Branch**
   - Always contains production-ready code.
   - Protected branch: Only merge via pull requests (PRs) after reviews and CI checks.
2. **`develop` Branch**
   - Contains the latest stable code for development.
   - Used for integrating features before they are merged into `main`.
3. **Feature Branches (`feature/*`)**
   - Used for adding new features.
   - Branch off from `develop`.
   - Naming convention: `feature/<feature-name>` (e.g., `feature/leave-management`).
4. **Hotfix Branches (`hotfix/*`)**
   - Used for urgent fixes in production.
   - Branch off from `main` and merge back into both `main` and `develop`.
   - Naming convention: `hotfix/<issue-name>` (e.g., `hotfix/login-error`).
5. **Bugfix Branches (`bugfix/*`)**
   - Used for fixing bugs found during development.
   - Branch off from `develop`.
   - Naming convention: `bugfix/<issue-name>` (e.g., `bugfix/typo-in-dtr`).
6. **Release Branches (`release/*`)**
   - Used for preparing production releases.
   - Branch off from `develop`.
   - Naming convention: `release/<version>` (e.g., `release/v1.0.0`).

---

## **3. Git Commit Rules**
### **Commit Message Format** (Use **Conventional Commits**)
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### **Types**
- **feat**: A new feature.
- **fix**: A bug fix.
- **docs**: Documentation changes.
- **style**: Code style changes (e.g., formatting, no logic changes).
- **refactor**: Code refactoring without changing functionality.
- **test**: Adding or updating tests.
- **chore**: Maintenance tasks (e.g., updating dependencies).

### **Examples**
- `feat(dtr): add flexible scheduling support`
- `fix(employee): resolve duplication issue in table`
- `docs(readme): update installation instructions`

---

## **4. Pull Request Workflow**
1. **Create a Pull Request (PR):**
   - Branch into `develop` for features and bug fixes.
   - Branch into `main` for hotfixes.
   - Use the following title format: `<type>: <summary>` (e.g., `feat: add leave management module`).

2. **PR Review Process:**
   - Assign at least one reviewer.
   - All CI checks must pass before merging.
   - Reviewers should:
     - Check code quality and readability.
     - Ensure the task meets the acceptance criteria.
     - Suggest improvements if necessary.

3. **Merging Strategy:**
   - Use **Squash and Merge** to maintain a clean commit history.
   - Delete the branch after merging to avoid clutter.

---

## **5. Tagging and Releases**
1. **Tagging:**
   - Use Semantic Versioning (`vMAJOR.MINOR.PATCH`).
     - Example: `v1.0.0`
   - Create a Git tag for every release:
     ```bash
     git tag -a v1.0.0 -m "Release v1.0.0"
     git push origin v1.0.0
     ```

2. **Release Notes:**
   - Write a release note for each tagged version.
   - Include:
     - New features.
     - Bug fixes.
     - Known issues.

---

## **6. Code Quality Checks**
1. **Automated CI Pipeline:**
   - Set up GitHub Actions to run on every PR.
   - Include the following checks:
     - Linting (`pnpm lint`).
     - Tests (`pnpm test`).
     - Build (`pnpm build`).

2. **Code Reviews:**
   - Enforce at least one code review before merging.
   - Use GitHub's protected branch rules to enforce checks.

---

## **7. Environment Management**
1. **Environment Variables:**
   - Maintain variables in a `.env` file (excluded from Git).
   - Provide a sample `.env.example` for developers.

2. **Secrets:**
   - Store sensitive information (e.g., API keys) as GitHub Secrets.

---

## **8. Git Hooks**
Use `Husky` to enforce pre-commit and pre-push hooks:
1. **Install Husky:**
   ```bash
   pnpm add -D husky lint-staged
   pnpx husky install
   ```

2. **Add Hooks:**
   - Pre-commit: Run linting and tests.
     ```bash
     pnpx husky add .husky/pre-commit "pnpm lint-staged"
     ```
   - Pre-push: Ensure tests pass before pushing.
     ```bash
     pnpx husky add .husky/pre-push "pnpm test"
     ```

---

## **9. Branch Protection Rules**
Set up protection for the `main` and `develop` branches in GitHub:
- Require pull requests before merging.
- Enforce CI checks (e.g., linting, tests).
- Require at least one reviewer approval.
- Restrict force-pushes and direct commits.

---

## **10. Collaboration Best Practices**
1. **Write Clear Documentation:**
   - Document features, APIs, and workflows in the `docs/` directory.
   - Update the `README.md` regularly.

2. **Use Issues and Labels:**
   - Create GitHub issues for each task or bug.
   - Use labels to categorize issues (e.g., `bug`, `enhancement`, `priority`).

3. **Milestones:**
   - Define milestones for major releases or sprints.
   - Assign issues to milestones for tracking progress.

---

## **11. Conflict Resolution**
- Pull the latest `develop` or `main` branch before starting work:
  ```bash
  git pull origin develop
  ```
- Resolve conflicts locally before pushing.

---

## **12. Backup and Recovery**
- Regularly back up the `main` branch to ensure no data loss.
- Use GitHub's branch protection and history to recover from accidental changes.

---

## **13. Scaling for Future Development**
- Consider using **monorepos** with tools like `Nx` or `TurboRepo` if the project expands into multiple services (e.g., mobile app, admin panel).
- Modularize the system into feature-specific directories for scalability.
  ```
  src/
  ├── features/
  │   ├── employee/
  │   ├── dtr/
  │   ├── leave/
  ```

---

This strategy will ensure a clean, maintainable, and scalable workflow for the HRIS project. Adopting these practices will help reduce errors, improve collaboration, and streamline your development process.