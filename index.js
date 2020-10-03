const model = [
    {
        type: 'title',
        value: 'Title From JS'
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
    }
];

const $site = document.querySelector('#site');

model.forEach(block => {
    let html = '';

    if (block.type === 'title') {
        html = `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
        `;
    } else if (block.type === 'text') {
        html = `
            <div class="row">
                <div class="col-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sit.</p>
                </div>
            </div>
        `
    } else if (block.type === 'columns') {

    }

    $site.insertAdjacentHTML('beforeend', html);
});