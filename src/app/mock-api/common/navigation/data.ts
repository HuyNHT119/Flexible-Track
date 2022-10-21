/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'Home',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/home'
    },
    {
        id: 'tasks',
        title: 'Issues',
        type: 'basic',
        icon: 'heroicons_outline:pencil',
        link: '/tasks'
    },
    {
        id: 'Scrumboard',
        title: 'Scrumboard',
        subtitle: 'Scrumboard feature',
        type: 'group',
        icon: 'heroicons_outline:pencil-alt',
        children: [

            {
                id: 'scrumboard.sample',
                title: 'Sample',
                type: 'basic',
                icon: 'heroicons_outline:map',
                link: '/scrumboard/sample'
            },
            {
                id: 'scrumboard.board',
                title: 'Board',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/scrumboard/board'
            },
        ]
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'Home',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/home'
    },
    {
        id: 'tasks',
        title: 'Issues',
        type: 'basic',
        icon: 'heroicons_outline:pencil',
        link: '/tasks'
    },
    {
        id: 'scrumboard',
        title: 'Scrumboard',
        type: 'aside',
        icon: 'heroicons_outline:pencil-alt',
        children: [

            {
                id: 'scrumboard.sample',
                title: 'Sample',
                type: 'basic',
                icon: 'heroicons_outline:map',
                link: '/scrumboard/sample'
            },
            {
                id: 'scrumboard.board',
                title: 'Board',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/scrumboard/board'
            },
        ]
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'Home',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/home'
    },
    {
        id: 'tasks',
        title: 'Issues',
        type: 'basic',
        icon: 'heroicons_outline:pencil',
        link: '/tasks'
    },
    {
        id: 'scrumboard',
        title: 'Scrumboard',
        type: 'aside',
        icon: 'heroicons_outline:pencil-alt',
        children: [

            {
                id: 'scrumboard.sample',
                title: 'Sample',
                type: 'basic',
                icon: 'heroicons_outline:map',
                link: '/scrumboard/sample'
            },
            {
                id: 'scrumboard.board',
                title: 'Board',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/scrumboard/board'
            },
        ]
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'home',
        title: 'Home',
        type: 'basic',
        icon: 'heroicons_outline:home',
        link: '/home'
    },
    {
        id: 'tasks',
        title: 'Issues',
        type: 'basic',
        icon: 'heroicons_outline:pencil',
        link: '/tasks'
    },
    {
        id: 'scrumboard',
        title: 'Scrumboard',
        type: 'aside',
        icon: 'heroicons_outline:pencil-alt',
        children: [

            {
                id: 'scrumboard.sample',
                title: 'Sample',
                type: 'basic',
                icon: 'heroicons_outline:map',
                link: '/scrumboard/sample'
            },
            {
                id: 'scrumboard.board',
                title: 'Board',
                type: 'basic',
                icon: 'heroicons_outline:pencil-alt',
                link: '/scrumboard/board'
            },
        ]
    },
];
