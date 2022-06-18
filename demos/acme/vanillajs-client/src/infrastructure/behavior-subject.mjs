//
export class BehaviorSubject{
  #subscribers=[];
  #value={};
  constructor(initialValue){
    this.#value=initialValue;
  }

  subscribe(callback){
    //TODO: Implement unsubscribe.
    callback(this.#value);
    this.#subscribers.push(callback);
  }

  next(newValue){
    this.#value=newValue;
    this.#subscribers.forEach(s=>s(this.#value));
  }

  get value(){
    return this.#value;
  }

}