// import React from 'react';
// import './Blog.css';

// function Blog() {
//   const articles = [
//     {
//       title: 'Titre de l\'article 1',
//       excerpt: 'Extrait de l\'article 1...',
//       imageUrl: '/images/article1.jpg',
//       link: '/article1',
//     },
//     {
//       title: 'Titre de l\'article 2',
//       excerpt: 'Extrait de l\'article 2...',
//       imageUrl: '/images/article2.jpg',
//       link: '/article2',
//     },
//     // Ajoutez d'autres articles
//   ];
//   return (
//     <section className="blog">
//       <h2>Mon Blog</h2>
//       {/* Contenu du blog */}
//       <div className="articles-grid">
//         {articles.map((article, index) => (
//           <div className="article-card" key={index}>
//             <img src={article.imageUrl} alt={article.title} />
//             <h3>{article.title}</h3>
//             <p>{article.excerpt}</p>
//             <a href={article.link}>Lire la suite</a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Blog;



// import React from 'react';
// import './Blog.css';

// function Blog() {
//   const articles = [
//     {
//       title: "Titre de l'article 1",
//       excerpt: "Extrait de l'article 1...",
//       imageUrl: "/images/article1.jpg",
//       link: "/article1",
//     },
//     {
//       title: "Titre de l'article 2",
//       excerpt: "Extrait de l'article 2...",
//       imageUrl: "/images/article2.jpg",
//       link: "/article2",
//     },
//     {
//       title: "Titre de l'article 3",
//       excerpt: "Extrait de l'article 1...",
//       imageUrl: "/images/article1.jpg",
//       link: "/article1",
//     },
//     {
//       title: "Titre de l'article 4",
//       excerpt: "Extrait de l'article 2...",
//       imageUrl: "/images/article2.jpg",
//       link: "/article2",
//     },
//     // Ajoutez d'autres articles
//   ];

//   return (
//     <section className="blog">
//       <h2>Mon Blog</h2>
//       <div className="timeline">
//         {articles.map((article, index) => (
//           <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
//             <div className="timeline-content">
//               <img src={article.imageUrl} alt={article.title} />
//               <h3>{article.title}</h3>
//               <p>{article.excerpt}</p>
//               <a href={article.link}>Lire la suite</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Blog;






import React, { useState } from 'react';
import openai from 'openai'; // Assure-toi d'installer la bibliothèque OpenAI

// Initialise avec ta clé API OpenAI
openai.apiKey = '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';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await openai.Completion.create({
        model: "text-davinci-003", // Ou un autre modèle, comme GPT-4
        prompt: newMessages.map((msg) => msg.content).join("\n"),
        max_tokens: 150,
      });

      const botMessage = {
        role: "assistant",
        content: response.choices[0].text.trim(),
      };

      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error("Erreur API OpenAI:", error);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <span>{msg.role === "user" ? "Vous" : "Assistant"}:</span>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez une question..."
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ChatBot;
