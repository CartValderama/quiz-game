### TypeScript Quiz Game Application

This project is a quiz game built using React and TypeScript, designed to help you practice and enhance your TypeScript skills in a practical, interactive environment. The game randomly selects questions from a predefined set, challenges players to choose the correct answer, and keeps track of scores and lives. The project emphasizes the use of TypeScript for type safety, better code quality, and improved maintainability.

#### Key Features:

- **Random Question Selection**: The game dynamically selects a random question from a list, ensuring a unique experience with each playthrough.
- **Score and Lives Tracking**: Players have a limited number of lives. The game tracks the score, increasing it for correct answers, and reducing lives for incorrect ones. The game ends when the player either reaches the maximum score or loses all lives.
- **User Feedback**: Players receive visual feedback on their choices, with buttons changing color to indicate correct or incorrect answers.
- **Game Restart**: Once the game ends, players have the option to restart the game or return to the home page.

#### Learning Objectives:

1. **TypeScript Integration with React**:
   - Learn how to integrate TypeScript into a React project, ensuring that components and state are correctly typed.
   - Understand how to use TypeScript to define prop types and enforce strict type checking throughout the application.

2. **State Management with TypeScript**:
   - Manage game state (score, lives, current question) with TypeScript, leveraging its ability to provide clear, predictable behavior and prevent common bugs.

3. **Component-Based Architecture**:
   - The application is divided into components such as `App` and `QuizInfinite`, each handling specific functionality with well-defined props and state management.

4. **User Interaction Handling**:
   - TypeScript helps manage and validate user interactions, ensuring that input handling (like selecting a quiz answer) is error-free and responsive.

5. **Dynamic Styling Based on State**:
   - The application uses conditional styling to provide feedback to the user, with TypeScript ensuring that styles are applied correctly based on the current game state.

#### How to Use:

1. **Start the Game**: Launch the application to begin a new quiz game. A random question will be presented with multiple-choice answers.
2. **Answer Questions**: Select an answer by clicking on one of the choices. The game will provide immediate feedback and update the score and lives accordingly.
3. **End of Game**: The game ends when you either answer enough questions correctly or lose all your lives. You can then choose to restart the game or return to the home page.
