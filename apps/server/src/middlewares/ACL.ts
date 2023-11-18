export default class ACL {
  roles: any;
  results: any;

  constructor(roles: any) {
    this.roles = roles;
  }

  perform(resource: string, score: number) {
    let _result: any = {};
    _result[resource] = {};

    if (resource in this.roles) {
      if (this.roles[resource] >= score) {
        _result[resource] = { can: true };
      } else {
        _result[resource] = { can: false, message: "Forbidden" };
      }
    } else {
      _result[resource] = { can: false, message: "Undefined" };
    }

    this.results = { ...this.results, ..._result };
    return this;
  }

  validate() {
    return this.results;
  }
}
