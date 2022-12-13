import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from './project.model';

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

    getIssuesyUserId() {
        var body = {
            pageNumber: 0,
            pageSize: 15,
            search: '',
            id: 2
        }
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/issue/getAllByUserId', body, { observe: 'response' });
    }

    getProjects(id?: any) {
        var body = {
            pageNumber: 0,
            pageSize: 15,
            search: '',
            userId: id ?? 2
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

    removeMember(projectId: any, userId: any) {
        var data = {
            projectId: projectId,
            userId: userId
        }
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/removeMember', data, { observe: 'response' })
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

    createStatus(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/status/create', data, { observe: 'response' })
    }

    createSprintStatus(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/status/create', data, { observe: 'response' })
    }

    getSprintStatus(id: any) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/status/get-by-sprint/' + id, { observe: 'response' })
    }

    getIssue(id: any) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/issue/' + id, { observe: 'response' })
    }

    updateIssue(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/issue/update', data, { observe: 'response' })
    }

    getSprint(id: any) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/sprint/' + id, { observe: 'response' })
    }

    removeStatus(id: any) {
        return this._http.delete<any>('http://103.160.2.51:8080/flexibletrack/api/v1/status/delete/' + id, { observe: 'response' })
    }

    removePriority(id: any) {
        return this._http.delete<any>('http://103.160.2.51:8080/flexibletrack/api/v1/priorities/delete/' + id, { observe: 'response' })
    }

    removeTag(id: any) {
        return this._http.delete<any>('http://103.160.2.51:8080/flexibletrack/api/v1/tags/delete/' + id, { observe: 'response' })
    }

    removeType(id: any) {
        return this._http.delete<any>('http://103.160.2.51:8080/flexibletrack/api/v1/types/delete/' + id, { observe: 'response' })
    }

    getIssueByProjectId(id: any, search?: string) {
        var data = {
            pageNumber: 0,
            pageSize: 15,
            search: search ?? '',
            id: id
        }
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/issue/getAllByProjectId/' + data.id, data, { observe: 'response' })
    }
}