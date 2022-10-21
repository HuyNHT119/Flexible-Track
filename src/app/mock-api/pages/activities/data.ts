/* eslint-disable */
import * as moment from 'moment';

export const activities = [
    {
        id: '493190c9-5b61-4912-afe5-78c21f1044d7',
        icon: 'heroicons_solid:star',
        description: 'Your submission has been accepted',
        date: moment().subtract(25, 'minutes').toISOString(), // 25 minutes ago
        extraContent: `<div class="font-bold">Congratulations for your acceptance!</div><br>
                        <div>Hi Brian,<br>Your submission has been accepted and you are ready to move into the next phase. Once you are ready, reach out to me and we will ...</div>`
    },
    {
        id: 'b91ccb58-b06c-413b-b389-87010e03a120',
        icon: 'heroicons_solid:mail',
        description: 'You have 15 unread mails across 3 mailboxes',
        date: moment().subtract(3, 'hours').toISOString(), // 3 hours ago
        linkedContent: 'Mailbox',
        link: '/apps/mailbox',
        useRouter: true
    },
    {
        id: '541416c9-84a7-408a-8d74-27a43c38d797',
        icon: 'heroicons_solid:refresh',
        description: 'Your <strong>Docker container</strong> is ready to publish',
        date: moment().subtract(5, 'hours').toISOString(), // 5 hours ago
        linkedContent: 'Download the container',
        link: '.',
        useRouter: true
    },
    {
        id: 'b85c2338-cc98-4140-bbf8-c226ce4e395e',
        icon: 'heroicons_solid:mail',
        description: 'You have 3 new mails',
        date: moment().subtract(1, 'day').toISOString(), // 1 day ago
        extraContent: `<ol class="list-decimal list-inside space-y-2">
                            <li class="font-medium">Please review and sign the attached agreement</li>
                            <li class="font-medium">Delivery address confirmation</li>
                            <li class="font-medium">Previous clients and their invoices</li>
                        </ol>`,
        linkedContent: 'Mailbox',
        link: '/apps/mailbox',
        useRouter: true
    },
    {
        id: 'fd0f01b4-f3de-4333-add5-cd86850279f8',
        image: 'assets/images/avatars/female-02.jpg',
        description: '<strong>Tina Harris</strong> started a chat with you',
        date: moment().subtract(1, 'day').toISOString(), // 1 day ago,
        linkedContent: 'Go to Chat (Tina Harris)',
        link: '/apps/chat/5636c0ba-fa47-42ca-9160-27340583041e',
        useRouter: true
    },
    {
        id: '8f8e1bf9-4661-4939-9e43-390957b60f42',
        icon: 'heroicons_solid:star',
        description: 'Your submission has been accepted and you are ready to sign-up for the final assigment which will be ready in 2 days',
        date: moment().subtract(3, 'days').toISOString() // 3 days ago
    },
    {
        id: '30af917b-7a6a-45d1-822f-9e7ad7f8bf69',
        icon: 'heroicons_solid:refresh',
        description: 'Your Vagrant container is ready to download',
        date: moment().subtract(4, 'day').toISOString() // 4 days ago
    }
];
