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
            pageSize: 0,
            search: '',
            userId: 2
        }
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/getAllProject', body, { observe: 'response' }).pipe(
            tap((response) => {
                if (response.body) {
                    this._projects.next(response.body.content);
                }
            }),
        );
    }

    getSprints(id: number) {
        return this._http.get<any>('http://103.160.2.51:8080/flexibletrack/api/v1/sprint/getAllByProjectId/' + id, { observe: 'response' })
    }

    getProject(id: number) {
        return this._http.get<Project>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/getAllProject/' + id).pipe(
            tap((response) => {
                if (response !== null) {
                    this._project.next(response);
                }
            }),
        );
    }

    createProject(data: any) {
        return this._http.post<any>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/create', data, { observe: 'response' });
    }

}