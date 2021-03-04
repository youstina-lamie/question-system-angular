import { Question } from '../_model/questionModel';
export class QuestionsService {
  questions: Question[] = [
    {
      id: 1,
      bodyOfQuestion:
        "Diane said she wouldn't like to travel in ______ helicopter. She doesn't think it's very safe.",
      choices: ['a', 'an', 'the', '_'],
      answer: 'a',
    },
    {
      id: 2,
      bodyOfQuestion: 'We _____ in the morning',
      choices: ["don't come", "didn't come", 'came not', 'not came'],
      answer: "didn't come",
    },
    {
      id: 3,
      bodyOfQuestion: 'I hope that you _____ (have) a good time tomorrow.',
      choices: ['will have', 'are having', 'a&b'],
      answer: 'will have',
    },
    {
      id: 4,
      bodyOfQuestion: 'Is Susan _____ home?',
      choices: ['in', 'on', 'at', 'under'],
      answer: 'at',
    },
    {
      id: 5,
      bodyOfQuestion: "Do the childern go to school every day?'_____'",
      choices: [
        'Yes,they go.',
        'Yes,they do.',
        'They go.',
        "No,they don't go.",
      ],
      answer: 'Yes,they do.',
    },
    {
      id: 6,
      bodyOfQuestion: 'What _____ now?',
      choices: ['is the time', 'does the time', 'is time', 'is it'],
      answer: 'is the time',
    },
    {
      id: 7,
      bodyOfQuestion: 'They always go to school _____ bicycle',
      choices: ['with', 'in', 'on', 'by'],
      answer: 'by',
    },
    {
      id: 8,
      bodyOfQuestion: 'What color _____ his new car?',
      choices: ['have', 'is', 'does', 'are'],
      answer: 'is',
    },
    {
      id: 9,
      bodyOfQuestion: "Are there many students in Room 12? '____'",
      choices: [
        'Yes there are.',
        'Yes,they are.',
        'Some are.',
        "No they aren't.",
      ],
      answer: 'Yes there are.',
    },
    {
      id: 10,
      bodyOfQuestion: "Whose bicycle is it? it's '_____' ",
      choices: ['he', 'her', 'hers', 'she'],
      answer: 'hers',
    },
  ];

  getAllQuestions(): Question[] {
    return this.questions.slice();
  }
  getQuestionById(id: number): Question {
    return this.questions.find((q) => q.id == id);
  }
}
