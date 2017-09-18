/*
 * This file is generated by jOOQ.
*/
package io.jedaev.dayon.model.tables;


import io.jedaev.dayon.model.Keys;
import io.jedaev.dayon.model.Public;
import io.jedaev.dayon.model.tables.records.TaskRecord;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.Identity;
import org.jooq.Schema;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.UniqueKey;
import org.jooq.impl.TableImpl;


/**
 * This class is generated by jOOQ.
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.9.5"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Task extends TableImpl<TaskRecord> {

    private static final long serialVersionUID = 1796235329;

    /**
     * The reference instance of <code>public.task</code>
     */
    public static final Task TASK = new Task();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TaskRecord> getRecordType() {
        return TaskRecord.class;
    }

    /**
     * The column <code>public.task.id</code>.
     */
    public final TableField<TaskRecord, Long> ID = createField("id", org.jooq.impl.SQLDataType.BIGINT.nullable(false).defaultValue(org.jooq.impl.DSL.field("nextval('task_id_seq'::regclass)", org.jooq.impl.SQLDataType.BIGINT)), this, "");

    /**
     * The column <code>public.task.text</code>.
     */
    public final TableField<TaskRecord, String> TEXT = createField("text", org.jooq.impl.SQLDataType.CLOB.nullable(false), this, "");

    /**
     * Create a <code>public.task</code> table reference
     */
    public Task() {
        this("task", null);
    }

    /**
     * Create an aliased <code>public.task</code> table reference
     */
    public Task(String alias) {
        this(alias, TASK);
    }

    private Task(String alias, Table<TaskRecord> aliased) {
        this(alias, aliased, null);
    }

    private Task(String alias, Table<TaskRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, "");
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Schema getSchema() {
        return Public.PUBLIC;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Identity<TaskRecord, Long> getIdentity() {
        return Keys.IDENTITY_TASK;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public UniqueKey<TaskRecord> getPrimaryKey() {
        return Keys.TASK_PKEY;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public List<UniqueKey<TaskRecord>> getKeys() {
        return Arrays.<UniqueKey<TaskRecord>>asList(Keys.TASK_PKEY);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Task as(String alias) {
        return new Task(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public Task rename(String name) {
        return new Task(name, null);
    }
}
