const notify = new Notyf({
    position: {
        x: 'right',
        y: 'top',
    },
    types: [
        {
            type: 'primary',
            background: '#c600d0',
            icon: {
                className: 'fas fa-bell',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: false
        },
        {
            type: 'info',
            background: '#646ad0',
            icon: {
                className: 'fas fa-info-circle',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: false
        },
        {
            type: 'success',
            background: '#4ad040',
            icon: {
                className: 'fas fa-check-circle',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: false
        },
        {
            type: 'warning',
            background: '#d0c21b',
            icon: {
                className: 'fas fa-exclamation-triangle',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: false
        },
        {
            type: 'error',
            background: '#d05454',
            icon: {
                className: 'fas fa-bug',
                tagName: 'span',
                color: '#fff'
            },
            dismissible: false
        },
    ]
});

notification = {
    primary: function (message) {
        notify.open({
            type: 'primary',
            message: message
        });
    },
    info: function (message) {
        notify.open({
            type: 'info',
            message: message
        });
    },
    success: function (message) {
        notify.open({
            type: 'success',
            message: message
        });
    },
    warning: function (message) {
        notify.open({
            type: 'warning',
            message: message
        });
    },
    error: function (message) {
        notify.open({
            type: 'error',
            message: message
        });
    }
};