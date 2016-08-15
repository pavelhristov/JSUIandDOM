function solve() {
    return function(selector) {
        var template = [
            // put the lines of your template in this array as strings
            '<div class="events-calendar">',
            '<h2 class="header">',
            'Appointments for <span class="month">{{this.month}}</span> <span class="year">{{this.year}}</span>',
            '</h2>',
            '{{#each this.days}}',
            '<div class="col-date">',
            '<div class="date">{{day}}</div>',
            '<div class="events">',
            '{{#each this.events}}',
            '<div class="event {{this.importance}}" title="{{this.comment}}">',
            '{{#if this.title}}',
            '<div class="title">{{this.title}}</div>',
            '<span class="time">at: {{this.time}}</span>',
            '{{else}}',
            '<div class="title">Free slot</div>',
            '{{/if}}',
            '</div>',
            '{{/each}}',
            '</div>',
            '</div>',
            '{{/each}}',
            '</div>'
        ].join('');

        // template = '<div class="events-calendar"><h2 class="header">Appointments for <span class="month">{{month}}</span> <span class="year">{{year}}</span></h2>{{#days}}<div class="col-date"><div class="date">{{day}}</div><div class="events">{{#events}}<div class="event {{importance}}"{{#if title}} title="{{comment}}"{{/if}}><div class="title">{{#if title}}{{title}}{{else}}Free slot{{/if}}</div>{{#if time}}<span class="time">at: {{time}}</span>{{/if}}</div>{{/events}}</div></div>{{/days}}</div>'

        if (template.length) {
            document.getElementById(selector).innerHTML = template;
        }
    };
}

if (typeof module !== 'undefined') {
    module.exports = solve;
}