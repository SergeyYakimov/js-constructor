import image from './assets/image.png';
import {TitleBlock, ColumnsBlock, ImageBlock, TextBlock} from './classes/blocks';

export const model = [
    new TitleBlock('Constructor Pure JS',  {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Главная картинка'
    }),
    new ColumnsBlock([
        'Приложение на чистом JS без использования библиотек',
        'Необходимо использование принципов SOLID и ООП',
        'JavaScript - это просто, интересно.'
    ],
    {
        styles: {
            'font-weight': 'bold',
            color: '#fff',
            padding: '2rem',
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)'
        }
    }),
    new TextBlock('Интересная информация', {
        styles: {
            'font-weight': 'bold',
            padding: '1rem',
            background: 'linear-gradient(to left, #f2994a, #f2c94c)'
        }
    })
];