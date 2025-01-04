# AI Smart Bot

AI Smart Bot is a personality-driven chatbot built using **Express.js**, **Node.js**, **REST APIs**, **HTML**, **CSS**, and **JavaScript**. This bot leverages the **OpenAI API** to deliver intelligent and engaging conversational experiences.

---

## Features

- **Dynamic Personality:** Customize the bot's personality to match your requirements.
- **Express.js Backend:** Robust backend to handle API calls and user interactions.
- **OpenAI Integration:** Seamlessly integrates with OpenAI to provide conversational AI capabilities.
- **RESTful APIs:** Modular design using REST APIs for efficient data handling.
- **Interactive Frontend:** User-friendly interface built with HTML, CSS, and JavaScript.
- **Environment Configurations:** Uses `.env` files to manage sensitive data securely.

---

## Tech Stack

### Backend
- **Node.js**: Runtime environment for building scalable server-side applications.
- **Express.js**: Framework for building RESTful APIs.
- **OpenAI API**: For AI-driven responses.

### Frontend
- **HTML**: Structure of the application.
- **CSS**: Styling for a sleek and modern look.
- **JavaScript**: Adding interactivity to the user interface.

### Environment
- **dotenv**: To manage sensitive environment variables like API keys.

---

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Samadali123/Ai-SmartBot.git
   cd Ai-SmartBot
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   PORT=8080
   ```

4. **Run the Application:**
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

---

## Usage

1. Open the application in your browser.
2. Interact with the chatbot through the user interface.
3. Customize the bot's personality and behavior by modifying the logic in the `server.js` file.

---

## Project Structure

```plaintext
Ai-SmartBot/
├── public/
│   ├── css/
│   ├── js/
│   └── index.html
├── server.js
├── .env
├── package.json
└── README.md
```

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For questions or suggestions, feel free to reach out:
- **GitHub:** [Samadali123](https://github.com/Samadali123)
- **Email:** [samadali0125@gmail.com](mailto:samadali0125@gmail.com)
