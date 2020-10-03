import image from './assets/image.png';

export const model = [
    {
        type: 'title',
        value: 'Constructor Pure JS', 
        options: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem'
            }
        }
    },
    {
        type: 'image',
        value: image, 
        options: {
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
        }
    },
    {
        type: 'columns',
        value: [
            'Приложение на чистом JS без использования библиотек',
            'Необходимо использование принципов SOLID и ООП',
            'JavaScript - это просто, интересно.' 
        ],
        options: {
            styles: {
                'font-weight': 'bold',
                color: '#fff',
                padding: '2rem',
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)'
            }
        }
    },
    {
        type: 'text',
        value: 'Интересная информация',
        options: {
            styles: {
                'font-weight': 'bold',
                padding: '1rem',
                background: 'linear-gradient(to left, #f2994a, #f2c94c)'
            }
        }
    } 
];