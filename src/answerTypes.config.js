import {commerce, finance, hr, logistics, marketing, sales_f, sales_m, transform, itSolutions} from "./constants/images";
import AnalyticsIcon from "./components/svgIcons/Skills/AnalyticsIcon";
import DeterminationIcon from "./components/svgIcons/Skills/DeterminationIcon";
import {CreativityIcon} from "./components/svgIcons/Skills/CreativityIcon";
import {SociabilityIcon} from "./components/svgIcons/Skills/SociabilityIcon";
import {AttentivenessIcon} from "./components/svgIcons/Skills/AttentivenessIcon";
import {StrategyIcon} from "./components/svgIcons/Skills/StrategyIcon";
import {InventIcon} from "./components/svgIcons/Skills/InventIcon";
import {LeadershipIcon} from "./components/svgIcons/Skills/LeadershipIcon";
import {HumanityLoveIcon} from "./components/svgIcons/Skills/HumanityLoveIcon";
import {InitiativeIcon} from "./components/svgIcons/Skills/InitiativeIcon";
import {TendernessIcon} from "./components/svgIcons/Skills/TendernessIcon";
import {ProactivityIcon} from './components/svgIcons/Skills/ProactivityIcon';
import {PersistenceIcon} from "./components/svgIcons/Skills/PersistenceIcon";


export const AnswerType = {
    SalesF: 'salesF',
    SalesM: 'salesM',
    Finance: 'finance',
    Marketing: 'marketing',
    Logistics: 'logistics',
    IT: 'it',
    ECommerce: 'eCommerce',
    Transformation: 'transformation',
    HR: 'hr'
};

export const SkillTypes = {
    analytics: {
        icon: AnalyticsIcon,
        name: 'аналитическое\n мышление'
    },
    determination: {
        icon: DeterminationIcon,
        name: 'решительность'
    },
    sociability: {
        icon: SociabilityIcon,
        name: 'общительность'
    },
    creativity: {
        icon: CreativityIcon,
        name: 'креативность'
    },
    attentiveness: {
        icon: AttentivenessIcon,
        name: 'внимательность'
    },
    proactivity: {
        icon: ProactivityIcon,
        name: 'проактивность'
    },
    persistence: {
        icon: PersistenceIcon,
        name: 'упорство'
    },
    strategy: {
        icon: StrategyIcon,
        name: 'стратегическое \n мышление'
    },
    inventiveness: {
        icon: InventIcon,
        name: 'изобретательность'
    },
    responsibility: {
        icon: LeadershipIcon,
        name: 'ответственность'
    },
    humanityLover: {
        icon: HumanityLoveIcon,
        name: 'любовь к людям'
    },
    initiative: {
        icon: InitiativeIcon,
        name: 'инициативность'
    },
    leadership: {
        icon: LeadershipIcon,
        name: 'лидерство'
    },
    tenderness: {
        icon: TendernessIcon,
        name: 'отзывчивость'
    }
}

export const SexTypes = {
    Male: 'male',
    Female: 'female'
}

export const answerTypes = {
    [AnswerType.SalesF]: {
        type: AnswerType.SalesF,
        title: 'Наташа из отдела \nsales',
        position: 'Наш старший менеджер по управлению маржинальностью продукта ',
        sex: SexTypes.Female,
        skills: [SkillTypes.persistence, SkillTypes.sociability, SkillTypes.strategy, SkillTypes.proactivity],
        description: 'Твоя способность собирать людей вокруг себя ради достижения общей цели помогала бы формировать стратегию ценообразования в нашей команде. Благодаря твоей работе с Avon будет меняться качество жизни женщин.',
        image: sales_f,

    },
    [AnswerType.SalesM]: {
        type: AnswerType.SalesM,
        title: 'Виталий из отдела\nsales',
        position: 'Наш национальный\nтренинг-менеджер',
        sex: SexTypes.Male,
        skills: [SkillTypes.humanityLover,SkillTypes.attentiveness, SkillTypes.initiative, SkillTypes.leadership],
        description: 'Ты можешь быть ответственен за стратегию обучения и развития полевых продаж, диджитал и beauty-тренингов. С твоими скиллами ты бы внес вклад в бизнес Avon и улучшил качество жизни женщин.',
        image: sales_m,

    },
    [AnswerType.Finance]: {
        type: AnswerType.Finance,
        title: 'Саша из отдела \nфинансов',
        position: 'Наш финансовый \nаналитик',
        sex: SexTypes.Male,
        skills: [SkillTypes.analytics, SkillTypes.attentiveness, SkillTypes.inventiveness, SkillTypes.responsibility],
        description: 'Твои навыки обработки информации и составления прогноза расходов могли бы увеличить доход многих женщин. С таким крутым специалистом можно быть уверенным в завтрашнем дне!',
        image: finance,
    },
    [AnswerType.Marketing]: {
        type: AnswerType.Marketing,
        title: 'Соня из отдела\n маркетинга',
        position: 'Наш младший\n бренд-менеджер',
        sex: SexTypes.Female,
        skills: [SkillTypes.analytics, SkillTypes.determination, SkillTypes.sociability, SkillTypes.creativity],
        description: 'Проактивность и смелость позволяют тебе сворачивать горы и решать любые креативные задачи в сжатые сроки. С нами ты будешь продвигать крутые продукты и делать мир красивее каждый день.',
        image: marketing,
    },
    [AnswerType.Logistics]: {
        type: AnswerType.Logistics,
        title: 'Радик из отдела \nлогистики',
        position: 'Наш координатор секции\n' +
            'сортировки и ввода заказов ',
        sex: SexTypes.Male,
        skills: [SkillTypes.analytics, SkillTypes.attentiveness, SkillTypes.determination, SkillTypes.proactivity],
        description: 'Твоя способность моментально принимать верные решения поможет нам доставлять товары в любую точку страны. С тобой возможности для развития безграничны))',
        image: logistics,
    },
    [AnswerType.IT]: {
        type: AnswerType.IT,
        title: 'Света из отдела\nИТ-решений',
        position: 'Наш старший менеджер\nпо ИТ-решениям ',
        sex: SexTypes.Female,
        skills: [SkillTypes.proactivity, SkillTypes.inventiveness, SkillTypes.attentiveness, SkillTypes.determination],
        description: 'Твои навыки могут обеспечить бесперебойную коммуникацию по всем техническим вопросам между бизнес-функциями. С тобой нам будет по силам решить любую задачу!)',
        image: itSolutions,
    },
    [AnswerType.ECommerce]: {
        type: AnswerType.ECommerce,
        title: 'Арина из отдела\ne-commerce',
        position: 'Наш старший специалист \nпо контенту интернет-магазина',
        sex: SexTypes.Female,
        skills: [SkillTypes.proactivity, SkillTypes.attentiveness,SkillTypes.creativity, SkillTypes.determination],
        description: 'При поддержке Avon твоя способность разбираться в трендах, SEO-оптимизации и контенте помогла бытысячам женщин улучшить качество жизни. С тобой легко сделать мир чуточку красивее))',
        image: commerce,
    },
    [AnswerType.Transformation]: {
        type: AnswerType.Transformation,
        title: 'Илья из отдела\nкоммерческой трансформации',
        position: 'Наш менеджер отдела бизнес-аналитики',
        sex: SexTypes.Male,
        skills: [SkillTypes.analytics, SkillTypes.attentiveness,SkillTypes.inventiveness,SkillTypes.leadership],
        description: 'Твои инициативы могут увеличить продажи компании и развивать beauty-индустрию. Твои аналитические скиллы нашли бы выход из любой кризисной ситуации.',
        image: transform,
    },
    [AnswerType.HR]: {
        type: AnswerType.HR,
        title: 'Настя из отдела\n HR',
        position: 'Наш старший специалист\nпо развитию талантов',
        sex: SexTypes.Female,
        skills: [SkillTypes.creativity,SkillTypes.tenderness,SkillTypes.leadership,SkillTypes.humanityLover],
        description: 'Твоя инициативность и креативность помогли бы тебе создавать проекты, продвигающие бренд работодателя. Благодаря таким аватарам, как ты, появился проект CyberAvon и этот тест тоже :)',
        image: hr,
    },
};