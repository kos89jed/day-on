import {GoalType} from "./goal-type.enum";
import {GoalStatus} from "./goal-status.enum";
import {Topic} from "./topic";

export class Goal {
  id: Number
  text: String
  type: GoalType
  status: GoalStatus
  trialsCount: number
  approachesCount: number
  topics: Topic[]

  constructor(
    id: Number,
    text: String,
    type: GoalType = GoalType.DAILY,
    status: GoalStatus = GoalStatus.IN_PROGRESS,
    trialsCount: number = 0,
    approachesCount: number = 1,
    topics: Topic[] = []
  ) {
    this.id = id
    this.text = text
    this.type = type
    this.status = status
    this.trialsCount = trialsCount
    this.approachesCount = approachesCount
    this.topics = topics
  }

  isDone() : boolean {
    return this.status === GoalStatus.DONE
  }

  increaseTrial() {
    this.trialsCount ++
    if (this.trialsCount === this.approachesCount) {
      this.status = GoalStatus.DONE
    }
  }

  addTopic(topic: Topic) : void {
    this.topics.push(topic)
  }

}
