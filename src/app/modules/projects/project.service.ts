import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {

    private _projects: BehaviorSubject<Project[] | null> = new BehaviorSubject(null);
    private _sprints: BehaviorSubject<any | null> = new BehaviorSubject(null);
    private _project: BehaviorSubject<Project | null> = new BehaviorSubject(null);
    private _sprint: BehaviorSubject<any | null> = new BehaviorSubject(null);
    // private _pagination: BehaviorSubject<PlaningPagination | null> = new BehaviorSubject(null);

    constructor(private _http: HttpClient) { }

    get projects$(): Observable<Project[]> {
        return this._projects.asObservable();
    }

    get project$(): Observable<Project> {
        return this._project.asObservable();
    }

    get sprints$(): Observable<Project[]> {
        return this._sprints.asObservable();
    }

    get sprint$(): Observable<Project> {
        return this._sprint.asObservable();
    }

    getProjects() {
        var body = {
            pageNumber: 0,
            pageSize: 15,
            search: '',
            userId: 2
        }
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/getAllProject', body, { observe: 'response' });
    }

    searchProjects(search?: string) {
        var body = {
            pageNumber: 0,
            pageSize: 15,
            search: search ?? '',
            userId: 2
        }
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/getAllProject', body, { observe: 'response' });
    }

    getProjectMembers(projectId: number) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/getProjectMember/' + projectId, { observe: 'response' });
    }

    getSprints(id: number) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/sprint/getAllByProjectId/' + id, { observe: 'response' })
    }

    getIssues(id: number, search?: string) {
        var data = {
            pageNumber: 0,
            pageSize: 5,
            search: search ?? '',
            id: id
        }
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/issue/getAllByProjectId/' + id, data, { observe: 'response' })
    }

    getProject(id: any) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/getById/' + id, { observe: 'response' });
    }

    createProject(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/create', data, { observe: 'response' });
    }

    updateProject(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/update', data, { observe: 'response' });
    }

    searchMembers(projectId: number, search?: string) {
        var data = {
            pageNumber: 0,
            pageSize: 15,
            search: search ?? '',
            projectId: projectId
        }
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/accounts/searchUser', data, { observe: 'response' });
    }

    inviteMember(projectId: number, memberId: number) {
        var body = {
            projectId: projectId,
            userId: memberId
        }
        console.log(body);

        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/addMember', body, { observe: 'response' })
    }

    createIssue(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/issue/create', data, { observe: 'response' })
    }

    createSprint(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/sprint/create', data, { observe: 'response' });
    }

    getIssueBySprintId(id: any, search?: string) {
        var data = {
            pageNumber: 0,
            pageSize: 15,
            search: search ?? '',
            id: id
        }
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/issue/getAllBySprintId/' + id, data, { observe: 'response' });
    }

    getPriorityByProjectId(id: any) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/priorities/get-by-project/' + id, { observe: 'response' })
    }

    getTypeByProjectId(id: any) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/types/get-by-project/' + id, { observe: 'response' })
    }

    getTagsByProjectId(id: any) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/tags/get-by-project/' + id, { observe: 'response' })
    }

    createTag(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/tags/create', data, { observe: 'response' })
    }

    createType(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/types/create', data, { observe: 'response' })
    }

    createPriority(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/priorities/create', data, { observe: 'response' })
    }

}