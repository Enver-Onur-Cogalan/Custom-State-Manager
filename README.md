# 🧠 Custom State Manager (React Native)

A simple global state manager built using the `useReducer` hook, with update and reset mechanisms — tailored for React Native apps.

---

## 🚀 Features

- ✅ Global state management using `useReducer`
- 🔄 Easy state updates via `updateState`
- 🔁 Full reset to initial state with `resetState`
- 🔧 Supports any shape of initial state object
- ⚛️ Minimal boilerplate, maximum flexibility

---

## 🧩 Usage

```js
const initialState = { count: 0, username: 'guest' };

const [state, updateState, resetState] = useCustomStateReducer(initialState);

// Update state
updateState({ count: state.count + 1 });

// Reset to initial state
resetState();
```

---

## 📁 Folder Structure

```
/hooks
  └── useCustomStateReducer.js
/screens
  └── TestScreen.js
App.js
```

---

## 🛠 Built With

- React Native
- JavaScript
- useReducer hook

---

## 📚 License

MIT — free to use and modify.

---

## ✨ Author

Enver Onur Cogalan
