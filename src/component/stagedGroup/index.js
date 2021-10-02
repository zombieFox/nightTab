import { bookmark } from '../bookmark';
import { groupDefault } from '../groupDefault';
import { isValidString } from '../../utility/isValidString';
import { trimString } from '../../utility/trimString';

export const StagedGroup = function (groupData) {

  this.group = groupData || JSON.parse(JSON.stringify(groupDefault));

  this.position = { origin: 0, destination: 0 };

  this.type = { new: false, existing: false };

  this.newGroup = ({
    name = false
  } = {}) => {

    if (name && isValidString(name)) {
      this.group.name.text = trimString(name);
    }

    this.position.destination = bookmark.all.length;

    this.type.new = true;

  };

};
