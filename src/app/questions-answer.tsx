import React from "react";

const QuestionsAnswer: React.FC = (props) => {
    const {questionsAnswers} = props;
    return (
        <div style={{ maxWidth: '100%', margin: "0 auto", paddingBlock: 24 }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {questionsAnswers.map((qa, index) => (
                    <li key={index} style={{ marginBottom: 24, borderBottom: "1px solid #eee", paddingBottom: 16 }}>
                        <h2 style={{ fontSize: "1rem", fontWeight: '600', margin: "0 0 8px", color: '#040f4e' }}>{qa.source}</h2>
                        <p style={{ fontSize: "1rem", margin: 0, color: '#1b1831' }}>{qa.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};



export default QuestionsAnswer;