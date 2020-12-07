import {
    commerce,
    finance, hr,
    itSolutions,
    logistics,
    logo,
    marketing,
    questionImage,
    sales_f, sales_m,
    transform
} from "./constants/images";
import Intro from "./components/screens/Intro";
import Question1 from "./components/screens/questions/Question1";
import Question3 from "./components/screens/questions/Question3";
import Question2 from "./components/screens/questions/Question2";
import Question4 from "./components/screens/questions/Question4";
import Question5 from "./components/screens/questions/Question5";
import Question6 from "./components/screens/questions/Question6";
import Final from "./components/screens/Final";


export const ScreenType = {
    Intro: 'intro',
    Question: 'question',
    Final: 'final',
};

export const screens = [
    {
        name: 'intro',
        component: Intro,
        type: ScreenType.Intro,
        preloadImages: [questionImage],
    },
    {
        name: 'question-1',
        component: Question1,
        type: ScreenType.Question,
        preloadImages: [],
        image: questionImage
    },
    {
        name: 'question-2',
        component: Question2,
        type: ScreenType.Question,
        preloadImages: [],
        image: questionImage
    },
    {
        name: 'question-3',
        component: Question3,
        type: ScreenType.Question,
        preloadImages: [],
        image: questionImage
    },
    {
        name: 'question-4',
        component: Question4,
        type: ScreenType.Question,
        preloadImages: [],
        image: questionImage,
    },
    {
        name: 'question-5',
        component: Question5,
        type: ScreenType.Question,
        preloadImages: [],
        image: questionImage,
    },
    {
        name: 'question-6',
        component: Question6,
        type: ScreenType.Question,
        preloadImages: [itSolutions,
            finance,
            logistics,
            marketing,
            commerce,
            logo,
            sales_f,
            sales_m,
            transform,
            hr],
        image: questionImage,
    },
    {
        name: 'final',
        component: Final,
        type: ScreenType.Final,
    },
];