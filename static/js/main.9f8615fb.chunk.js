(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{10:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var n=o(1),i=o.n(n),r=o(5),s=o.n(r),a=(o(10),o(2)),c=(o(4),i.a.createContext()),u=o(0);var l=function(){var e=Object(n.useContext)(c).setGameState;return Object(u.jsx)("div",{className:"Menu",children:Object(u.jsx)("button",{onClick:function(){return e("quiz")},children:"Start Quiz"})})},h=[{promt:"Consider the following array of 9 distinct integers to be sorted in ascending order using Bubble sort algorithm: (6, 3, 9, 7, 1, 5, 8, 2, 4). Which one represents the array after two iterations of the outer for loop of Bubble sort?",optionA:"3, 6, 7, 1, 5, 8, 2, 4, 9",optionB:"3, 6, 1, 5, 7, 2, 4, 8, 9",optionC:"9, 8, 7, 3, 5, 4, 6, 1, 2",optionD:"1, 2, 3, 4, 5, 6, 7, 8, 9",answer:"B"},{promt:"For some problem we prefer recursive solution because:",optionA:"Recursion usually has less overhead than the iterative version of the solution",optionB:"Recursion usually takes less CPU time than that taken by the iterative version of the solution",optionC:"Iterative solution for the problem may not exist",optionD:"Recursion helps us to write clean, short and intuitive code for solving the problem",answer:"D"},{promt:"For a normal queue implemented using an array of size MAX_SIZE, let Front and Rear points to the front and rear element respectively. Under what condition the queue is supposed to be full?",optionA:"Front = rear + 1",optionB:"Rear = front",optionC:"Front = (rear + 1) mod MAX_SIZE",optionD:"Rear = MAX_SIZE \u2013 1",answer:"D"},{promt:"Which of the following sorting algorithm is best suited if the elements are already sorted?",optionA:"Insertion Sort",optionB:"Heap Sort",optionC:"Merge Sort",optionD:"Quick Sort",answer:"A"},{promt:"Which one of the four for loops is the most efficient in terms of asymptotic time complexity? Assume that the same set of statements are executed within each of the for loop.",optionA:"for(i = 1; i < n; i *= 2)",optionB:"for(i = n; i > -1; i /= 2)",optionC:"for(i = 0; i < n; i++)",optionD:"for(i = 0; i < n; i += 2)",answer:"A"},{promt:"Consider a sorted array of m numbers. What would be the worst case time complexity of the best known algorithm to find whether a given element is present in the array?",optionA:"O(mlogm)",optionB:"O(m)",optionC:"O(1)",optionD:"O(logm)",answer:"D"},{promt:"Consider a standard implementation of circular queue implemented on an array A of size 11 (A[0,...10]) . The front and rear pointers are initialized to point at A[2] . In which position will the ninth element of the queue be added?",optionA:"A[1]",optionB:"A[10]",optionC:"A[9]",optionD:"A[0]",answer:"D"},{promt:"Consider the usual implementation of parentheses balancing program using stack. What will is the maximum number of parentheses that will appear on the stack at any instance of time during the analysis of { {  }  { { } } { { } } } ?",optionA:"1",optionB:"3",optionC:"4",optionD:"2",answer:"B"},{promt:"Given a set of elements {5, 6, 77, 88, 99} stored in an array in the same order, and the element to be searched is 88. How many iterations are done until the element is found?",optionA:"2",optionB:"4",optionC:"3",optionD:"1",answer:"A"},{promt:"What is the minimum number of comparisons required to find the minimum and the maximum of 100 distinct numbers simultaneously with the best possible algorithm?",optionA:"148",optionB:"100",optionC:"150",optionD:"200",answer:"A"}];var m=function(){var e=Object(n.useState)(0),t=Object(a.a)(e,2),o=t[0],i=t[1],r=Object(n.useContext)(c).setGameState,s=Object(n.useContext)(c),l=s.Score,m=s.setScore,p=Object(n.useState)(""),b=Object(a.a)(p,2),d=b[0],j=b[1];return Object(u.jsxs)("div",{className:"quiz",children:[Object(u.jsxs)("h3",{children:["Q.(",o+1,") . ",h[o].promt]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:function(){return j("A")},className:"forfocus",children:h[o].optionA}),Object(u.jsx)("button",{onClick:function(){return j("B")},className:"forfocus",children:h[o].optionB}),Object(u.jsx)("button",{onClick:function(){return j("C")},className:"forfocus",children:h[o].optionC}),Object(u.jsx)("button",{onClick:function(){return j("D")},className:"forfocus",children:h[o].optionD}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}),o===h.length-1?Object(u.jsx)("button",{className:"nxt",onClick:function(){h[o].answer===d&&m(l+1),r("endquiz")},children:"EndQuiz"}):Object(u.jsx)("button",{className:"nxt",onClick:function(){h[o].answer===d&&m(l+1),i(o+1)},children:"Next"})]})};var p=function(){var e=Object(n.useContext)(c),t=e.setGameState,o=e.Score,i=e.setScore,r=100*o;return r/=h.length,Object(u.jsxs)("div",{className:"endthequiz",children:[Object(u.jsx)("h2",{children:"The Quiz is Finished!!!!"}),o<h.length/2?Object(u.jsxs)("h2",{children:["Oops You Got Only ",o,"/",h.length," Correct Answers i.e ",r," % Correct Answers!!!!! Better Luck Next Time"]}):Object(u.jsxs)("h2",{children:["Hurray You Got ",o,"/",h.length," Correct Answers i.e ",r," % Correct Answers!!!!! It's Party Time ."]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:function(){i(0),t("menu")},children:"Restart Quiz"})]})};var b=function(){var e=Object(n.useState)("menu"),t=Object(a.a)(e,2),o=t[0],i=t[1],r=Object(n.useState)(0),s=Object(a.a)(r,2),h=s[0],b=s[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Quiz App"}),"menu"===o?Object(u.jsx)(c.Provider,{value:{GameState:o,setGameState:i,Score:h,setScore:b},children:Object(u.jsx)(l,{})}):null,"quiz"===o?Object(u.jsx)(c.Provider,{value:{GameState:o,setGameState:i,Score:h,setScore:b},children:Object(u.jsx)(m,{})}):null,"endquiz"===o?Object(u.jsx)(c.Provider,{value:{GameState:o,setGameState:i,Score:h,setScore:b},children:Object(u.jsx)(p,{})}):null]})},d=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,13)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;o(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),d()},4:function(e,t,o){}},[[12,1,2]]]);
//# sourceMappingURL=main.9f8615fb.chunk.js.map