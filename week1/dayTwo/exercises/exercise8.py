# Star Wars quiz data
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def ask_questions(questions):
    correct = 0
    incorrect = 0
    wrong_answers = []

    for q in questions:
        user_answer = input(q["question"] + " ").strip()
        if user_answer.lower() == q["answer"].lower():
            print("Correct!")
            correct += 1
        else:
            print(f"Incorrect! The correct answer is: {q['answer']}")
            incorrect += 1
            wrong_answers.append({
                "question": q["question"],
                "your_answer": user_answer,
                "correct_answer": q["answer"]
            })

    return correct, incorrect, wrong_answers

def show_results(correct, incorrect, wrong_answers):
    print("\n--- Quiz Results ---")
    print(f"Correct answers: {correct}")
    print(f"Incorrect answers: {incorrect}")

    if wrong_answers:
        print("\nHere are the questions you missed:")
        for w in wrong_answers:
            print(f"- {w['question']}")
            print(f"  Your answer: {w['your_answer']}")
            print(f"  Correct answer: {w['correct_answer']}\n")
    else:
        print("Excellent! You got everything right!")

correct, incorrect, wrong_answers = ask_questions(data)
show_results(correct, incorrect, wrong_answers)
