import {AnswerType, SexTypes} from "./answerTypes.config";
import {MaleIcon} from "./components/svgIcons/MaleIcon";
import {FemaleIcon} from "./components/svgIcons/FemaleIcon";

export const questions = [
    {
        id: '1',
        text: 'Где я?',
        answers: [
            {
                id: '1',
                text: 'Постоянно\nна встречах',
                type: '',
            },
            {
                id: '2',
                text: 'Всегда\nонлайн',
                type: '',
            },
            {
                id: '3',
                text: 'Я здесь и не здесь,\nЯ везде и нигде...',
                type: '',
            },
        ],
    },
    {
        id: '2',
        text: 'Залипать \nинтереснее на…',
        answers: [
            {
                id: '1',
                text: 'Людей и все, что \nс ними связано',
                type: '',
            },
            {
                id: '2',
                text: '00101001010\n11001001',
                type: '',
            },
            {
                id: '3',
                text: 'Мемасики, тренды\nи соцсеточки',
                type: '',
            },
        ],
    },
    {
        id: '3',
        text: 'Перед отпуском \nя обычно...',
        answers: [
            {
                id: '1',
                text: 'Мечтаю и планирую \nпоездку',
                type: '',

            },
            {
                id: '2',
                text: 'Сверяюсь со списком, \nчемодан собран за неделю',
                type: '',

            },
            {
                id: '3',
                text: 'Скачиваю всевозможные \nприложения-помощники',
                type: '',

            },
        ],
    },
    {
        id: '4',
        text: 'Что мне \nснилось?',
        answers: [
            {
                id: '1',
                text: 'Кругосветка \nв компании друзей\n',
                type: '',
            },
            {
                id: '2',
                text: 'Цунами и деловая \nвстреча после',
                type: '',
            },
            {
                id: '3',
                text: 'В смысле?',
                type: '',
            },
        ],
    },
    {
        id: '5',
        text: 'Чего я жду\nот работы?',
        answers: [
            {
                id: '1',
                text: 'Взаимодействия с людьми \nи изучение бьюти-рынка',
                type: [AnswerType.SalesF, AnswerType.HR,AnswerType.SalesM],
            },
            {
                id: '2',
                text: 'Освоения онлайна, \nведь за ним будущее',
                type: [AnswerType.IT, AnswerType.Transformation],
            },
            {
                id: '3',
                text: 'Изучения внутренней \nструктуры бизнеса',
                type: [AnswerType.ECommerce, AnswerType.Finance],
            },
            {
                id: '4',
                text: 'Непосредственной \nработы с продуктом',
                type: [AnswerType.Marketing, AnswerType.Logistics],
            },
        ],
    },
    {
        id: '6',
        text: 'Выбери \nсвой пол:',
        answers: [
            {
                id: '1',
                text: MaleIcon({width: '108px'}),
                type: SexTypes.Male,
            },
            {
                id: '2',
                text: FemaleIcon({width: '108px'}),
                type: SexTypes.Female,
            },
        ],
    },
]
