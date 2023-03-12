import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen",
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["K2", "Kilimanjaro", "Everest", "Matterhorn"],
    answer: "Everest",
  },
];

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(30);

  const handleAnswer = (option) => {
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(option);
    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
      setSeconds(30);
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setSeconds(30);
    } else {
      setShowScore(true);
    }
  };

  const timer = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      handleNextQuestion();
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      timer();
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <View style={styles.container}>
      {!showScore ? (
        <>
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{seconds}s</Text>
          </View>
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
              {quizData[currentQuestion].question}
            </Text>
          </View>
          <View style={styles.optionsContainer}>
            {quizData[currentQuestion].options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedOption === option &&
                    option === quizData[currentQuestion].answer &&
                    styles.correctOption,
                  selectedOption === option &&
                    option !== quizData[currentQuestion].answer &&
                    styles.incorrectOption,
                ]}
                disabled={selectedOption !== null}
                onPress={() => handleAnswer(option)}
              >
                <Text
                  style={[
                    styles.optionText,
                    selectedOption === option &&
                      option === quizData[currentQuestion].answer &&
                      styles.correctOptionText,
                    selectedOption === option &&
                      option !== quizData[currentQuestion].answer &&
                      styles.incorrectOptionText,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            You scored {score} out of {quizData.length}
          </Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  timerContainer: {
    alignSelf: "flex-end",
    marginTop: 20,
    marginRight: 20,
    backgroundColor: "#E74C3C",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  timerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  questionContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  questionText: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
  optionsContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  optionButton: {
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
    minWidth: 250,
    justifyContent: "center",
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  correctOption: {
    backgroundColor: "#4CAF50",
  },
  incorrectOption: {
    backgroundColor: "#F44336",
  },
  correctOptionText: {
    color: "#fff",
  },
  incorrectOptionText: {
    color: "#fff",
  },
  nextButton: {
    backgroundColor: "#3498DB",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 20,
    minWidth: 250,
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
