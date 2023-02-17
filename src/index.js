/**
 * ToDo 아이템 구조
 *  @typedef {Object} ToDoItem - ToDo 아이템
 *  @property {number} toDoId - ToDo 아이템 아이디
 *  @property {string} content - ToDo 아이템 내용
 *  @property {boolean} isCompleted - ToDo 아이템 완료 여부
 *  @property {string} category - ToDo 아이템 카테고리
 *  @property {...Tag[]} [tags] - ToDo 아이템 태그 리스트
 */

/**
 * ToDo 아이템의 태그 구조
 * @typedef {Object} Tag - ToDo 아이템 태그
 * @property {number} tagId - 태그 아이디
 * @property {string} content - 태그 내용
 */

/**
 * ToDo 아이템을 관리하는 클래스
 */
class ToDoList {
  /**
   * ToDoList 인스턴스 생성자 함수
   * @constructor
   */
  constructor() {
    /**
     * todo 리스트
     * @private
     * @type {ToDoItem[]}
     */
    this.toDoList = [];

    /**
     * 다음 추가될 ToDo 아이템 아이디
     * @private
     * @type {number}
     */
    this.toDoId = 0;

    /**
     * 다음에 추가될 Tag 아이디
     * @private
     * @type {number}
     */
    this.tagId = 0;
  }

  /**
   * 새로운 ToDo 아이템 생성 함수
   * @param {string} content - ToDo 아이템 내용
   * @param {string} category - ToDo 아이템 카테고리
   * @throws {Error} content가 빈 문자열인 경우 에러
   */
  create(content, category) {}

  /**
   * ToDo 아이템이 가진 tag 생성 함수
   * @param {number} toDoId - ToDo 아이템 아이디
   * @param {...string[]} tags - ToDo 아이템에 태그 리스트
   */
  createTagsByToDoId(toDoId, ...tags) {}

  /**
   * ToDoList을 읽어오는 함수
   * @returns {ToDoItem[]} 모든 ToDo 아이템
   */
  read() {}

  /**
   * ToDo 아이템의 content 업데이트 함수
   * @param {number} toDoId - ToDo 아이템 아이디
   * @param {string} content - 새로운 ToDO 아이템 컨텐츠
   * @throws {Error} content가 빈 문자열인 경우 에러
   */
  updateContent(toDoId, content) {}

  /**
   * ToDo 아이템의 완료 여부 업데이트 함수
   * @param {number} toDoId - ToDo 아이템 아이디
   */
  updateIsCompleted(toDoId) {}

  /**
   * ToDo 아이템의 카테고리 업데이트 함수
   * @param {number} toDoId - ToDo 아이템 아이디
   * @param {string} category - ToDo 아이템의 커스텀 카테고리
   * @throws {Error} category가 빈 문자열인 경우 에러
   * @throws {Error} toDoId가 존재하지 않은 경우 에러
   */
  updateCategory(toDoId, category) {}

  /**
   * ToDo 아이템의 태그를 업데이트하는 함수
   * @param {number} toDoId - ToDo 아이템 아이디
   * @param {number} tagId - Tag 아이디
   * @param {string} tag - 업테이트할 Tag 문자
   * @throws {Error} toDoId가 존재하지 않은 경우 에러
   */
  updateTags(toDoId, tagId, tag) {}

  /**
   * 특정 ToDo 아이템 삭제 함수
   * @param {number} toDoId - ToDo 아이템 아이디
   * @throws {Error} toDoId가 존재하지 않은 경우 에러
   */
  deleteById(toDoId) {}

  /**
   * 특정 ToDo 아이템의 특정 태그를 삭제 함수
   * @param {number} toDoId - ToDo 아이템 아이디
   * @param {number} tagId - tagId 아이템 아이디
   * @throws {Error} category 존재하지 않은 경우 에러
   */
  deleteTagByToDoId(toDoId, tagId) {}

  /**
   * 특정 ToDo 아이템의 모든 태그 삭제 함수
   * @param {number} toDoId - ToDo 아이템 아이디
   * @throws {Error} tagId가 존재하지 않은 경우 에러
   */
  deleteAllTagsByToDoId(tagId) {}

  /**
   * 모든 ToDo 아이템 삭제 함수
   */
  deleteAll() {}
}
