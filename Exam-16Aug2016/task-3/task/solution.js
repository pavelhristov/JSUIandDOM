function solve() {
    return function() {
        var template = [
            '<h1>{{this.title}}</h1>',
            '<ul>',
            '{{#each this.posts}}',
            '{{#if this.deleted}}',
            '{{else}}',
            '<li>',
            '<div class="post">',
            '<p class="author">',
            '{{#if this.author}}',
            '<a class="user" href="/user/{{this.author}}">{{this.author}}</a>',
            '{{else}}',
            '<a class="anonymous">Anonymous</a>',
            '{{/if}}',
            '</p>',
            '<pre class="content">{{{this.text}}}</pre>',
            '</div>',
            '<ul>',
            '{{#each this.comments}}',
            '{{#if this.deleted}}',
            '{{else}}',
            '<li>',
            '<div class="comment">',
            '<p class="author">',
            '{{#if this.author}}',
            '<a class="user" href="/user/{{this.author}}">{{this.author}}</a>',
            '{{else}}',
            '<a class="anonymous">Anonymous</a>',
            '{{/if}}',
            '</p>',
            '<pre class="content">{{{this.text}}}</pre>',
            '</div>',
            '</li>',
            '{{/if}}',
            '{{/each}}',
            '</ul>',
            '</li>',
            '{{/if}}',
            '{{/each}}',
            '</ul>'
        ].join('\n');

        return template;
    };
}

// submit the above

if (typeof module !== 'undefined') {
    module.exports = solve;
}