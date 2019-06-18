// import { TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { Store } from '@ngrx/store';
//
// import { MockStore, TestingModule } from '../../../../testing/utils';
// import { NotificationService } from '../../../core/core.module';
//
// import {
//   ActionTodosFilter,
//   ActionTodosRemoveDone,
//   ActionTodosToggle
// } from '../todos.actions';
// import { TodosState } from '../todos.model';
// import { TodosContainerComponent } from './todos-container.component';
// import { State } from '../../examples.state';
//
// describe('TodosComponent', () => {
//   let component: RenderResult;
//   let store: MockStore<State>;
//   let dispatchSpy: jasmine.Spy;
//
//   beforeEach(async () => {
//     component = await createComponent('<anms-todos></anms-todos>', {
//       imports: [TestingModule],
//       declarations: [TodosContainerComponent],
//       providers: [NotificationService],
//       detectChanges: false
//     });
//
//     store = TestBed.get(Store);
//     dispatchSpy = spyOn(store, 'dispatch');
//   });
//
//   it('should be created with 0 todos', () => {
//     store.setState(createState({ items: [], filter: 'ALL' }));
//     component.fixture.detectChanges();
//
//     expect(component).toBeTruthy();
//     expect((<any>component.queryAllByTestId)('todo-item').length).toBe(0);
//   });
//
//   it('should display todos', () => {
//     store.setState(
//       createState({
//         items: [{ id: '1', name: 'test', done: false }],
//         filter: 'ALL'
//       })
//     );
//     component.fixture.detectChanges();
//
//     expect((<any>component.queryAllByTestId)('todo-item').length).toBe(1);
//     expect(component.getByTestId('todo-item').textContent.trim()).toBe('test');
//   });
//
//   it('should dispatch remove "DONE" todos action', () => {
//     store.setState(
//       createState({
//         items: [
//           { id: '1', name: 'test 1', done: true },
//           { id: '2', name: 'test 2', done: false }
//         ],
//         filter: 'DONE'
//       })
//     );
//     component.fixture.detectChanges();
//     dispatchSpy.calls.reset();
//
//     component.click(component.queryByLabelText('remove done items'));
//
//     expect(dispatchSpy).toHaveBeenCalledTimes(1);
//     expect(dispatchSpy).toHaveBeenCalledWith(new ActionTodosRemoveDone());
//   });
//
//   it('should dispatch add todo action', () => {
//     store.setState(createState({ items: [], filter: 'ALL' }));
//     component.fixture.detectChanges();
//     dispatchSpy.calls.reset();
//
//     component.keyUp(
//       component.getByPlaceholderText('anms.examples.todos.input'),
//       {
//         target: {
//           value: 'poke Tomas'
//         }
//       }
//     );
//
//     component.click(component.getByLabelText('add todo'));
//
//     expect(
//       (component.getByPlaceholderText(
//         'anms.examples.todos.input'
//       ) as HTMLInputElement).value
//     ).toBe('');
//     expect(dispatchSpy).toHaveBeenCalledTimes(1);
//     expect(dispatchSpy.calls.mostRecent().args[0].payload.name).toBe(
//       'poke Tomas'
//     );
//   });
//
//   it('should dispatch filter todo action', () => {
//     store.setState(createState({ items: [], filter: 'ALL' }));
//     component.fixture.detectChanges();
//     dispatchSpy.calls.reset();
//
//     component.click(component.getByLabelText('open filter menu'));
//     fireEvent.click(
//       component.fixture.debugElement.query(
//         By.css('[aria-label="show active items"]')
//       ).nativeElement
//     );
//
//     expect(dispatchSpy).toHaveBeenCalledTimes(1);
//     expect(dispatchSpy).toHaveBeenCalledWith(
//       new ActionTodosFilter({ filter: 'ACTIVE' })
//     );
//   });
//
//   it('should dispatch toggle todo action', () => {
//     store.setState(
//       createState({
//         items: [{ id: '1', name: 'test 1', done: true }],
//         filter: 'ALL'
//       })
//     );
//     component.fixture.detectChanges();
//     dispatchSpy.calls.reset();
//
//     component.click(component.getByLabelText('toggle todo'));
//
//     expect(dispatchSpy).toHaveBeenCalledTimes(1);
//     expect(dispatchSpy).toHaveBeenCalledWith(
//       new ActionTodosToggle({ id: '1' })
//     );
//   });
//
//   it('should disable remove done todos button if no todo is done', () => {
//     store.setState(
//       createState({
//         items: [{ id: '1', name: 'test 1', done: true }],
//         filter: 'ALL'
//       })
//     );
//     component.fixture.detectChanges();
//
//     expect(
//       (component.getByLabelText('remove done items') as HTMLInputElement)
//         .disabled
//     ).toBeFalsy();
//   });
//
//   it('should disable add new todo button if input length is less than 4', () => {
//     store.setState(createState({ items: [], filter: 'ALL' }));
//     component.fixture.detectChanges();
//
//     component.keyUp(
//       component.getByPlaceholderText('anms.examples.todos.input'),
//       {
//         target: {
//           value: 'add'
//         }
//       }
//     );
//
//     expect(
//       (component.getByLabelText('add todo') as HTMLInputElement).disabled
//     ).toBeTruthy();
//   });
//
//   it('should clear new todo input value on ESC key press', () => {
//     store.setState(createState({ items: [], filter: 'ALL' }));
//     component.fixture.detectChanges();
//
//     component.keyUp(
//       component.getByPlaceholderText('anms.examples.todos.input'),
//       {
//         target: {
//           value: 'hellooooo'
//         }
//       }
//     );
//
//     expect(
//       (component.getByPlaceholderText(
//         'anms.examples.todos.input'
//       ) as HTMLInputElement).value
//     ).toBeTruthy();
//
//     component.keyUp(
//       component.getByPlaceholderText('anms.examples.todos.input'),
//       {
//         key: 'Esc'
//       }
//     );
//
//     expect(
//       (component.getByPlaceholderText(
//         'anms.examples.todos.input'
//       ) as HTMLInputElement).value
//     ).toBeFalsy();
//   });
// });
//
// function createState(todoState: TodosState) {
//   return {
//     examples: {
//       todos: todoState
//     }
//   } as State;
// }
