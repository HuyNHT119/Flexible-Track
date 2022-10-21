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
        id: 'Scrumboard',
        title: 'Scrumboard',
        subtitle: 'Scrumboard feature',
        type: 'group',
        icon: 'heroicons_outline:pencil-alt',
        children: [
            {
                id: 'scrumboard.example',
                title: 'Example',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/scrumboard/example'
            },
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
        id: 'Scrumboard',
        title: 'Scrumboard',
        type: 'aside',
        icon: 'heroicons_outline:pencil-alt',
        children: [
            {
                id: 'scrumboard.example',
                title: 'Example',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/scrumboard/example'
            },
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
        id: 'Scrumboard',
        title: 'Scrumboard',
        type: 'aside',
        icon: 'heroicons_outline:pencil-alt',
        children: [
            {
                id: 'scrumboard.example',
                title: 'Example',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/scrumboard/example'
            },
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
        id: 'Scrumboard',
        title: 'Scrumboard',
        type: 'aside',
        icon: 'heroicons_outline:pencil-alt',
        children: [
            {
                id: 'scrumboard.example',
                title: 'Example',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/scrumboard/example'
            },
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
