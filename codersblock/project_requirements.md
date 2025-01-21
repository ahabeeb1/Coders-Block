# Project Requirements Document: CodersBlock Application

## Overview

The CodersBlock application is a platform designed to help users improve their programming skills through interactive challenges and real-world coding examples. The system will present users with curated coding challenges based on their skill level, allow them to write and test code in a browser-based editor, and provide real-time feedback on their submissions. Additional features include user authentication, progress tracking, an integrated AI agent, and retrieval-augmented generation (RAG) capabilities to enhance learning with contextual code snippets and documentation.

---

## Key Features

### User Authentication

- **Login and Signup**:
  - Users can sign up using username, email, and password
  - Support login via email or username
  - Passwords hashed using BCrypt with salt rounds of 12
  - OAuth integration for Google and GitHub login
- **Security Features**:
  - JWT tokens with refresh token rotation
  - Password requirements: minimum 8 characters, special chars, numbers
  - Email verification with expiring tokens
  - Password reset with secure time-limited tokens
  - Rate limiting: 5 attempts per minute per IP
  - Session management with device tracking
- **API Endpoints**:
  - `POST /auth/signup`
  - `POST /auth/login`
  - `POST /auth/refresh-token`
  - `POST /auth/logout`
  - `POST /auth/verify-email`
  - `POST /auth/reset-password/request`
  - `POST /auth/reset-password/confirm`
  - `GET /auth/sessions`
  - `DELETE /auth/sessions/{sessionId}`

### Home Page

- Provide an overview of the platform's purpose.
- Highlight the main features and benefits.
- Include login and signup links.

### User Dashboard

- **Overview Section**:
  - Current level and XP progress
  - Daily coding streak
  - Recent achievements
  - Next challenge recommendations
- **Statistics Display**:
  - Language-specific progress charts
  - Success rate per difficulty level
  - Average completion time trends
  - Heat map of coding activity
- **Activity Feed**:
  - Recent challenge attempts
  - Achievement unlocks
  - Streak milestones
  - Community interactions
- **Quick Actions**:
  - Resume last challenge
  - Start recommended challenge
  - Practice weak areas
  - Review saved solutions
- **API Endpoints**:
  - `GET /api/user/dashboard`
  - `GET /api/user/statistics`
  - `GET /api/user/activity`
  - `GET /api/user/achievements`
  - `GET /api/user/recommendations`

### Challenge System

- **Challenge Categories**:
  - Algorithm implementation
  - Data structure manipulation
  - System design
  - Bug fixing
  - Code optimization
  - Security vulnerabilities
- **Challenge Structure**:
  - Difficulty levels: Easy, Medium, Hard, Expert
  - Time estimation
  - Memory/complexity requirements
  - Prerequisites and related challenges
- **Testing Framework**:
  - Multiple test cases (hidden and visible)
  - Edge case validation
  - Performance benchmarking
  - Memory usage tracking
- **Submission System**:
  - Real-time validation
  - Performance metrics
  - Code quality analysis
  - Plagiarism detection
- **Solution Management**:
  - Community solutions (after successful submission)
  - Different approaches comparison
  - Time/space complexity analysis
- **API Endpoints**:
  - `GET /api/challenges`
  - `GET /api/challenges/{id}`
  - `POST /api/challenges/{id}/submit`
  - `GET /api/challenges/{id}/submissions`
  - `GET /api/challenges/{id}/solutions`
  - `POST /api/challenges/{id}/test`
  - `GET /api/challenges/categories`
  - `GET /api/challenges/search`

### Interactive Code Editor

- **Editor Features**:
  - Monaco Editor integration
  - Multiple language support with syntax highlighting
  - IntelliSense and auto-completion
  - Real-time error detection
  - Integrated terminal
- **UI Components**:
  - Split view (instructions/editor/output)
  - Resizable panels
  - Mini-map navigation
  - File tree for multi-file challenges
- **Development Tools**:
  - Integrated debugger
  - Breakpoint support
  - Variable inspection
  - Call stack visualization
- **Customization**:
  - Multiple themes (including dark mode)
  - Configurable keyboard shortcuts
  - Font size and family selection
  - Tab size and indentation settings
- **API Endpoints**:
  - `POST /api/editor/save-state`
  - `GET /api/editor/load-state`
  - `POST /api/editor/format`
  - `POST /api/editor/lint`

### Integrated AI Agent

- **Code Assistance**:
  - Context-aware code completion
  - Intelligent error resolution
  - Code refactoring suggestions
  - Documentation generation
- **Learning Support**:
  - Concept explanation
  - Related problem suggestions
  - Learning path recommendations
  - Custom difficulty adjustment
- **Code Analysis**:
  - Performance optimization suggestions
  - Security vulnerability detection
  - Best practices enforcement
  - Code smell identification
- **Personalization**:
  - Learning style adaptation
  - Difficulty level adjustment
  - Language-specific assistance
  - Progress-based suggestions
- **API Endpoints**:
  - `POST /api/ai/assist`
  - `POST /api/ai/review-code`
  - `POST /api/ai/explain`
  - `POST /api/ai/optimize`
  - `POST /api/ai/suggest-fix`
  - `POST /api/ai/generate-docs`

### Progress Tracking

- Track user progress:
  - Challenges completed.
  - Time spent on challenges.
  - Streak tracking.
- **Database Schema**:
  - `UserProgress` table with fields for `userId`, `challengeId`, `completed`, `startedAt`, and `completedAt`.
- **API Endpoints**:
  - `GET /api/user/progress`
  - `POST /api/user/progress/update`

### Recommendation Engine

- Recommend challenges based on:
  - User performance.
  - Past challenges completed.
  - Tags, categories, or programming languages of interest.
- **API Endpoint**:
  - `GET /api/challenges/recommended`

### RAG Integration

- **Content Processing**:
  - Code chunking with context preservation
  - Documentation parsing and indexing
  - Metadata extraction and tagging
  - Source attribution tracking
- **Embedding System**:
  - Model: OpenAI ada-002 or MPNet
  - Hybrid search (semantic + keyword)
  - Context window optimization
  - Regular reindexing pipeline
- **Retrieval Strategy**:
  - Multi-stage retrieval pipeline
  - Relevance scoring with MMR
  - Context aggregation
  - Source diversity enforcement
- **Integration Points**:
  - Challenge help system
  - Code review suggestions
  - Documentation lookup
  - Error resolution
- **API Endpoints**:
  - `POST /api/rag/query`
  - `POST /api/rag/index-repository`
  - `GET /api/rag/similar-code`
  - `GET /api/rag/documentation`
  - `POST /api/rag/feedback`

### Administration Panel (Future Scope)

- Manage challenges and test cases.
- Monitor user progress and system performance.

---

## Technical Requirements

### Frontend

- **Framework**: React.js (or Next.js for SSR).
- **Libraries**:
  - React Router for routing.
  - Material-UI or TailwindCSS for UI components.
  - Axios for API requests.
- **Features**:
  - Home page, Login/Signup, Dashboard, Challenge Pages.
  - Integrated code editor (e.g., Monaco Editor).

### Backend

- **Framework**: Spring Boot (Java).
- **Features**:
  - RESTful APIs for user management, challenges, and progress tracking.
  - Authentication with JWT.
  - Test case execution for submissions.
- **Dependencies**:
  - Spring Security, Spring Data JPA, Hibernate, Lombok.

### Database

- **Primary Database**: PostgreSQL (hosted on AWS RDS).
  - Tables:
    - `Users`: Stores user details.
    - `Challenges`: Stores challenge metadata (including programming languages).
    - `UserProgress`: Tracks user progress.
    - `Submissions`: Stores submitted code and results.
- **Vector Database**: Pinecone or Weaviate (for RAG).
  - Stores embeddings for code snippets and documentation.

### Infrastructure

- **Hosting**:
  - Backend: AWS EC2 or AWS Elastic Beanstalk.
  - Database: AWS RDS (PostgreSQL).
- **Tools**:
  - Docker for containerization.
  - Jenkins for CI/CD pipeline.

---

## System Architecture

1. **Frontend**:

   - React.js communicates with the backend via REST APIs.

2. **Backend**:

   - Spring Boot handles business logic, authentication, and database operations.

3. **Database**:

   - PostgreSQL stores user, challenge, and progress data.
   - Vector database stores embeddings for RAG queries.

4. **Workflow**:
   - User logs in → Backend validates JWT → Dashboard loads user data and recommended challenges.
   - User selects a challenge → Backend fetches challenge details and test cases.
   - User submits code → Backend validates code → Updates user progress.
   - AI Agent assists users with guidance and contextual help.

---

## Development Workflow

1. **Frontend Development**:

   - Set up React project (`npx create-react-app`).
   - Implement pages in order:
     - Home Page → Login/Signup → Dashboard → Challenge Pages → Code Editor.

2. **Backend Development**:

   - Set up Spring Boot project.
   - Build APIs in order:
     - User Authentication → Challenge Listing/Details → Submission Validation → Progress Tracking → AI Assistance.

3. **Database Design**:

   - Create PostgreSQL schema.
   - Use DBeaver or pgAdmin to visualize the schema.

4. **Testing**:

   - Use Postman to test backend APIs.
   - Write JUnit tests for backend services.
   - Test the frontend with tools like Cypress.

5. **Deployment**:
   - Use Docker to containerize the application.
   - Deploy to AWS (EC2/Elastic Beanstalk).

---

## Timeline (Proposed)

| **Phase**               | **Tasks**                                                                    | **Timeframe** |
| ----------------------- | ---------------------------------------------------------------------------- | ------------- |
| Authentication          | Login, Signup, JWT setup                                                     | 1 Week        |
| Dashboard               | User dashboard, API integration                                              | 1 Week        |
| Challenge System        | Challenge CRUD, filtering by language, filtering by difficulty, details page | 2 Weeks       |
| Code Editor Integration | Embed Monaco Editor, connect to backend                                      | 1 Week        |
| Submission Validation   | Backend validation logic, test cases                                         | 2 Weeks       |
| RAG Integration         | Embed vector database, implement contextual help                             | 2 Weeks       |
| AI Agent Integration    | Implement pair programmer features                                           | 2 Weeks       |
| Final Testing & Launch  | End-to-end testing, bug fixes, deploy                                        | 1 Week        |

---

## Future Enhancements

- Add support for multiple programming languages in the code editor.
- Gamification: Add badges, leaderboards, and achievements.
- Advanced recommendation engine using machine learning.
- Real-time collaboration features for pair programming.

---

Let me know if this aligns with your vision or if you'd like adjustments!
