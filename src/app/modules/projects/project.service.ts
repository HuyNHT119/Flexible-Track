import { Project } from './project.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {

    private _projects: BehaviorSubject<Project[] | null> = new BehaviorSubject(null);
    private _project: BehaviorSubject<Project | null> = new BehaviorSubject(null);
    // private _pagination: BehaviorSubject<PlaningPagination | null> = new BehaviorSubject(null);

    constructor(private _http: HttpClient) { }

    get projects$(): Observable<Project[]> {
        return this._projects.asObservable();
    }

    get project$(): Observable<Project> {
        return this._project.asObservable();
    }

    getProjects(): Observable<Project[]> {
        var params = {
            userId: 1
        }
        return this._http.get<Project[]>('http://103.160.2.51:8080/flexibletrack/api/v1/projects/getAllProject', { params: params }).pipe(
            tap((response) => {
                if (response.length > 0) {
                    this._projects.next(response);
                }
            }),
        );
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