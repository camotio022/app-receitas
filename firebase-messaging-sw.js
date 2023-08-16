self.addEventListener('push', (event) => {
    const data = event.data.json();
    const notification = {
        title: data.notification.title,
        body: data.notification.body,
    };
    self.registration.showNotification(notification.title, notification);
});