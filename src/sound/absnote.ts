import { Absnotes, getAbsnoteName, absnoteValues } from "./absnotes"
import { Absnote } from "./interfaces"

export class AbsnoteImpl implements Absnote{
	private value: Absnotes

	constructor(absnote: Absnotes){
		if(!absnoteValues.includes(absnote)){
			throw new Error(`invalid Absnotes: ${absnote}`)
		}
		this.value = absnote
	}

	public getValue():Absnotes{
		return this.value
	}

	public name():string{
		return getAbsnoteName(this.value).key
	}

	public up(halfToneDiff: number): Absnote{
		return new AbsnoteImpl(this.value+halfToneDiff)
	}

	public diff(target: Absnote): number{
		return target.getValue() - this.value
	}
}