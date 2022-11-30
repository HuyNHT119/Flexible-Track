
export interface IIssue {
    issueId: number,
    issueName: string,
    createdDate: string,
    updatedDate: string,
    estimation: number,
    finishedDate: string,
    sprintId: number,
    backlogId: number,
    creator: ICreator,
    type: IType[],
    priority: IPriority[],
    status: IStatus,
    assigner: IAssigner,
    tag: ITag[],
    description: string
}

export interface IStatus {
    id: number,
    name: string,
    sprintId: number,
    issue?: IIssue[]
}

export interface ICreator {
    id: number,
    username: string,
    fullname: string,
    email: string,
    tel: string,
    role: string,
    isActive: any,
    createAt: string,
    updateAt: string
}

export interface IType {
    id: number,
    name: string,
    projectId: number
}

export interface IPriority {
    id: number,
    name: string,
    projectId: number
}

export interface ITag {
    id: number,
    name: string,
    projectId: number
}

export interface IAssigner {
    id: number,
    username: string,
    fullname: string,
    email: string,
    tel: string,
    role: string,
    isActive: any,
    createAt: string,
    updateAt: string
}