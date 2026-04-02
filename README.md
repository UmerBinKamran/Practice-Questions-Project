# 🚀 JavaScript Practice App (React)

A modern React-based web app where users can explore JavaScript questions, view solutions, and execute them instantly — all in a clean, interactive UI.

---

## 📌 Features

- **Multiple JavaScript Questions**
- **Dynamic Routing (React Router)**
- **Code Display with Syntax Highlighting**
- **Run Code Functionality**
- **Live Output Display**
- **Back Navigation**
- **Clean Dark UI Design**

---

## 🛠️ Tech Stack

- **React (Vite)**
- **React Router DOM**
- **React Hooks** (`useState`, `useParams`, `useNavigate`)
- **react-syntax-highlighter**
- **CSS (Custom Styling)**

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Home.jsx
│   └── Question.jsx
│
├── data/
│   └── questions.js
│
├── App.jsx
├── main.jsx
└── App.css
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/js-practice-app.git
cd js-practice-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Syntax Highlighter

```bash
npm install react-syntax-highlighter
```

### 4. Run the App

```bash
npm run dev
```

---

## 🧪 How It Works

1. **Home Page**
   - Displays a list of JavaScript questions
   - Each question has a "Solve" button

2. **Question Page**
   - Shows:
     - Question
     - Code solution

   - Click **Run Code** to execute logic
   - Output is displayed instantly

---

## 📸 Features Breakdown

### 🔹 Dynamic Routing

Each question has a unique route:

```
/question/:id
```

---

### 🔹 Code Execution

Each question contains a `solve()` function:

```js
solve: () => {
  return "Your result";
};
```

---

### 🔹 Syntax Highlighting

Code is displayed using:

```js
react - syntax - highlighter;
```

---

## 💡 Example Questions

- Remove duplicates from array
- Reverse a string
- Find even/odd numbers
- Find largest number
- Count vowels
- Remove falsy values
- Array sum
- Find missing number

---

## 🎯 Learning Outcomes

This project helps you understand:

- React Hooks
- Component structure
- Routing in React
- State management
- Rendering dynamic data
- Handling user interactions

---

## 🚀 Future Improvements

- ✨ Add user input (custom test cases)
- 📊 Add difficulty levels (Easy/Medium/Hard)
- 🔍 Search & filter questions
- 📋 Copy code button
- 🧪 Test case validation system
- 🎨 LeetCode-style UI

---

## 🤝 Contributing

Feel free to fork this project and improve it!

---

## 📜 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Umer Kamran**
Frontend Developer 🚀

---

⭐ If you like this project, don’t forget to star the repo!
