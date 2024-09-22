
// Types //

type UserType = 'INTERNAL' | 'EXTERNAL' | 'KEYCLOAK';

type TUserProps = {
    signum: string;
    type: string;
    email: string;
    upn: string;
    role: string;
    tags: string[];
};

// Exports //

export class User {
    signum: string;
    type: UserType;
    email: string;
    upn: string;
    role: string;
    tags: string[];
    host: string;
    password: string;
    preferred_username: string;

    constructor(props: TUserProps) {
        this.signum = props.signum.toUpperCase();
        this.type = props.type.toUpperCase() as UserType;
        this.email = props.email;
        this.upn = props.upn;
        this.role = props.role;
        this.tags = props.tags;
        this.host = process.env[`CREDENTIAL_MANAGER_MACHINE_${this.signum}`] || 'cx-acc.nro.ericsson.net';
        this.password = process.env[`CREDENTIAL_MANAGER_PASSWORD_${this.signum}`] as string;
        this.preferred_username = this.type === 'INTERNAL' ? this.upn : this.email;
    }
}
