import { IAssigner, ICreator, IIssue, IPriority, IStatus, ITag, IType } from './flextrack.type';
export class Issue implements Required<IIssue>
{
    issueId: number;
    issueName: string;
    createdDate: string;
    updatedDate: string;
    estimation: number;
    finishedDate: string;
    sprintId: number;
    backlogId: number;
    creator: ICreator;
    type: IType[];
    priority: IPriority[];
    status: IStatus;
    assigner: IAssigner;
    tag: ITag[];
    description: string

    /**
     * Constructor
     */
    constructor(issue: IIssue) {
        this.issueId = issue.issueId || null;
        this.issueName = issue.issueName;
        this.description = issue.description || null;
        this.createdDate = issue.createdDate || null;
        this.estimation = issue.estimation || null;
        this.finishedDate = issue.finishedDate || null;
        this.sprintId = issue.sprintId || null;
        this.backlogId = issue.backlogId || null;
        this.creator = issue.creator || null;
        this.createdDate = issue.createdDate || null;
        this.status = issue.status || null;
        this.assigner = issue.assigner || null;
        this.priority = issue.priority;
        this.type = issue.type;
        this.tag = issue.tag;
    }
}

// -----------------------------------------------------------------------------------------------------
// @ List
// -----------------------------------------------------------------------------------------------------
export class Status implements Required<IStatus>
{
    id: number;
    name: string;
    sprintId: number;
    issue: IIssue[]

    /**
     * Constructor
     */
    constructor(status: IStatus) {
        this.id = status.id || null;
        this.name = status.name;
        this.sprintId = status.sprintId;

        // Cards
        if (status.issue) {
            this.issue = status.issue.map((issue) => {
                if (!(issue instanceof Issue)) {
                    return new Issue(issue);
                }
                return issue;
            });
        }

    }
}