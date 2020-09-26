import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GoalType} from "../../models/goal-type.enum";
import {FormControl, NgForm} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Observable} from "rxjs";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {map, startWith} from 'rxjs/operators';
import {MatChipInputEvent} from "@angular/material/chips";
import {Goal} from "../../models/goal";
import {Topic} from "../../models/topic";
import {GoalService} from "../../services/goal.service";

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.sass']
})
export class CreateGoalComponent implements OnInit {

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  topicCtrl = new FormControl();
  filteredTopics: Observable<string[]>;
  topics: string[] = [];
  allTopics: string[] = ['sport', 'apartments', 'promotion'];

  @ViewChild('topicInput') topicInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private goalService: GoalService) {
    this.filteredTopics = this.topicCtrl.valueChanges.pipe(
      startWith(null),
      map((v: string | null) => v ? this._filter(v) : this.allTopics.slice()));
  }

  types : string[]

  ngOnInit(): void {
    this.types = Object.keys(GoalType)
  }

  submit(createForm: NgForm) : void {
    const goal = new Goal(
      null,
      createForm.value.text,
      GoalType[createForm.value.type],
      null,
      createForm.value.approachesCount,
      0,
      this.topics.map(v => new Topic(v))
    )
    console.log(goal)
    this.goalService.addGoal(goal).subscribe()
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add topic
    if ((value || '').trim()) {
      this.topics.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.topicCtrl.setValue(null);
  }

  remove(topic: string): void {
    const index = this.topics.indexOf(topic);

    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.topics.push(event.option.viewValue);
    this.topicInput.nativeElement.value = '';
    this.topicCtrl.setValue(null);
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTopics.filter(v => v.toLowerCase().indexOf(filterValue) === 0);
  }
}
