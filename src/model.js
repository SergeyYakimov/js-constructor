import image from './assets/image.png';

export const model = [
    {
        type: 'title',
        value: 'Constructor Pure JS', 
        options: {
            tag: 'h2',
            styles: `background:linear-gradient(to right, #ff0099, #493240);color:#fff;text-align: center;padding: 1.5rem`
        }
    },
    {
        type: 'text',
        value: 'some text'
    },
    {
        type: 'columns',
        value: [
            '123', '456', '789'
        ]
    }, 
    {
        type: 'image',
        value: image
    }
];